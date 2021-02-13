export {};
const express = require('express');

const app = express();

const port = 3000;

const { getAllGames } = require('./db/database');

app.use('/', express.static(`__dirname${'/../client/dist'}`));

app.get('/games', (req, res) => {
  getAllGames()
    .then(result => res.send(result)[0])
    .catch(err => console.log(err));
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
});