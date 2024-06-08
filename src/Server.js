const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Define the port to listen on

// Define a sample endpoint
app.get('/api/data', (req, res) => {
  // Replace this with your actual data retrieval logic
  const data = {
    message: 'Hello from the server!',
    timestamp: new Date().toISOString()
  };
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
