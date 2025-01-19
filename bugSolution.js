const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    console.log(req.body);
    const user = req.body;
    // ... rest of user creation logic ...
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(400).json({ error: 'Bad Request: Invalid JSON' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});