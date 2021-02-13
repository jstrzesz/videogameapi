import React from 'react';

const Game = (title, platform, developer, publisher) => {
  console.log(title, platform, developer, publisher);
  return (
    <ul>
      <li>{title}</li>
      <li>{platform}</li>
      <li>{developer}</li>
      <li>{publisher}</li>
    </ul>
  )
};

export default Game;
