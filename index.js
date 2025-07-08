const express = require('express');
const app = express();

// GET /
app.get('/', (req, res) => {
  res.send('Hello from Nodejs App');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
