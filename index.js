const { request, response } = require('express');
const express = require('express');
const Datastore = require('nedb');
// const dbOps = require('./db-ops');

const app = express();

app.use(express.static('public'));
app.use(express.json());

const database = new Datastore('database.db');
database.loadDatabase();
// database.insert({theName: 'Fabian', satatus: '🌈✨'});
const databaseArray = [];

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if(err) {
      console.log(err);
      return;
    }
    response.json(data);
  })
})

app.post('/api', (request, response) => {
  console.log('I got a request');
  // console.log(request);
  // console.log(request.body);
  const data = request.body;
  const timestamp = Date.now()
  data.timestamp = timestamp;
  // database.insert({...data});

  database.insert(data);
  // database.remove({},{multi: true}, function(err, data){
  //     console.log(data)
  //   });
    databaseArray.push(data)
    // console.log(databaseArray)
    response.json({
      status: 'Success',
      timestamp: timestamp,
      latitude: data.lat,
      longitude: data.long
    });
  });

  // app.post('/api/add', )
  
  app.listen(3500, () => console.log('Listening to Port 3500!'));