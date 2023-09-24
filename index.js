// index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/models/database');
const storyRoutes = require('./src/routes/storyRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use the storyRoutes for handling story-related requests.
app.use('/api', storyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
