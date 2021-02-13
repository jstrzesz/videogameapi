const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'videogamedatabase'
});

const getAllGames = () => {
  return new Promise((resolve, reject) => {
    db.query('select * from games', (err, res, data) => {
      // console.log(res)
      if (err) reject(err);
      resolve(res);
    });
  });
}

module.exports = {
  db,
  getAllGames,
};
