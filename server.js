const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, './public');

app.use(express.static(publicDir));

app.get('/listing', (req, res) => {
  console.log('get listing');
  request('http://localhost:3003/listing').pipe(res);
  console.log('got listing');
});

app.get('/bookings', (req, res) => {
  console.log('get calendar');
  request('http://localhost:3002/bookings').pipe(res);
  console.log('got calendar');
});

app.get('/reviews', (req, res) => {
  console.log('get reviews');
  request('http://localhost:3004/reviews').pipe(res);
  console.log('got reviews');
});

app.get('/photoGallery', (req, res) => {
  console.log('get photos');
  request('http://localhost:3001/photoGallery').pipe(res);
  console.log('got photos');
});

app.listen(port, () => console.log('Listening on Port:', port));

