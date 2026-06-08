const express = require('express');

const app = express();
const PORT = 3000;

// ==========================
// FILL THESE IN
// ==========================

// Your API URL
const API_URL = 'https://kimvodgopkxekuzyavsy.supabase.co/functions/v1/Genkey';

// Method: GET, POST, PUT, DELETE
const METHOD = 'POST';

// Headers
const HEADERS = {
  'apikey': 'sb_publishable_eJQPv_OD2w4_m5xCm1bY5w_9qqIr6r9',
  'Authorization': 'Bearer sb_publishable_eJQPv_OD2w4_m5xCm1bY5w_9qqIr6r9',
  'Content-Type': 'application/json'
};

// Optional request body (for POST requests)
const BODY = {
};

// ==========================

app.get('/', async (req, res) => {
  try {
    const options = {
      method: METHOD,
      headers: HEADERS
    };

    // Add body only if not GET
    if (METHOD !== 'GET') {
      options.body = JSON.stringify(BODY);
    }

    const response = await fetch(API_URL, options);

    const text = await response.text();

    res.send(`
      <h2>API Response</h2>
      <pre>${text}</pre>
    `);

  } catch (err) {
    res.status(500).send(`
      <h2>Error</h2>
      <pre>${err.message}</pre>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
