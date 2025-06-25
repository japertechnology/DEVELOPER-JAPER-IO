const https = require('https');

const apiKey = process.env.NODE_API_KEY;
if (!apiKey) {
  console.error('NODE_API_KEY environment variable is required');
  process.exit(1);
}

const options = {
  hostname: 'api.japer.io',
  path: '/v1/x/ping',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
  },
};

const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data.trim());
  });
});

req.on('error', err => {
  console.error(err.message);
});

req.end();
