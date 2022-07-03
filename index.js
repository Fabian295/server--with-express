const express = require('express');
const Datastore = require('nedb');

const app = express();

app.use(express.static('public'));
app.use(express.json());

const database = new Datastore('database.db');
database.loadDatabase();
// database.insert({theName: 'Fabian', satatus: '🌈✨'});

const databaseArray = [];

app.post('/api', (request, response) => {
  console.log('I got a request');
  // console.log(request);
  // console.log(request.body);
  const data = request.body;
  const timestamp = Date.now()
  data.timestamp = timestamp;
  // database.insert({...data});
  database.insert(data);
  databaseArray.push(data)
  // console.log(databaseArray)
  response.json({
    status: 'Success',
    timestamp: timestamp,
    latitude: data.lat,
    longitude: data.long
  });
});

app.listen(3500, () => console.log('Listening to Port 3500!'));