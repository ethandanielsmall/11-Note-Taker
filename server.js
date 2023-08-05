const express = require('express');
const path = require('path');
const html = require('./routes/htmlRoutes.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Specific routes
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// Static files middleware
app.use(express.static('public'));

// Catch-all route for HTML routes
app.use('/', html);

// Catch-all route for handling 404 errors
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
