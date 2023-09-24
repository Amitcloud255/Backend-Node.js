const express = require('express');
const router = express.Router();
const db = require('../models/database');
router.post('/generate-story', (req, res) => {
  const { prompt } = req.body;
  const generatedStory = "This is a generated story based on the prompt: " + prompt;

  db.run('INSERT INTO stories (prompt, story) VALUES (?, ?)', [prompt, generatedStory], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to store the generated story.' });
    } else {
      res.status(200).json({ story: generatedStory });
    }
  });
});

module.exports = router;
