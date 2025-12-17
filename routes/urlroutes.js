const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const shortid = require('shortid');

const Url = mongoose.model(
  'Url',
  new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
  })
);

router.get('/', (req, res) => {
  res.render('index', {
    shortUrl: null,
    error: null,
  });
});

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.render('index', {
      shortUrl: null,
      error: 'Please enter a URL',
    });
  }

  try {
    let existing = await Url.findOne({ longUrl });
    if (existing) {
      return res.render('index', {
        shortUrl: `http://localhost:5000/${existing.shortCode}`,
        error: null,
      });
    }

    const shortCode = shortid.generate();
    const created = await Url.create({ longUrl, shortCode });

    return res.render('index', {
      shortUrl: `http://localhost:5000/${created.shortCode}`,
      error: null,
    });
  } catch (err) {
    console.error('Error in /shorten:', err);
    return res.render('index', {
      shortUrl: null,
      error: 'Server error, try again',
    });
  }
});

// Redirect
router.get('/:shortCode', async (req, res) => {
  try {
    const record = await Url.findOne({ shortCode: req.params.shortCode });

    if (!record) {
      return res.status(404).send('Short URL not found');
    }

    return res.redirect(record.longUrl);
  } catch (err) {
    console.error('Error in redirect route:', err);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
