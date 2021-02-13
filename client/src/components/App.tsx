import React, { useState, useEffect } from 'react';
import Game from './Game';
import axios from 'axios';

const App = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    getGames();
  }, [])

  const getGames = () => {
    axios.get('http://localhost:3000/games')
      .then(res => setGame(res.data[0]))
      .catch(err => console.log(err));
  }
  console.log(game);
  return (
    <div>
      <h1>Video game Api</h1>
      <h2>Video Games</h2>
        <ol>
          <li>{game.title}</li>
          <div>{game.platform}</div>
          <div>{game.developer}</div>
          <div>{game.publisher}</div>
        </ol>
    </div>
  );
};

export default App;
