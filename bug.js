const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  // Missing error handling if req.body is malformed or missing
  const user = req.body;
  // ... rest of user creation logic ...
});

// Missing global error handler

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});