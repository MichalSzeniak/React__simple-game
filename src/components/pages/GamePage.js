import React from 'react';
import '../styles/gamePage.scss';
import Button from '../../assets/button.svg';

const GamePage = ({handleGame, score}) => {
  return (
    <div className="gamePage">
      <h1 className="logo">
        C<span className="logo__color1">lik</span>
        <span className="logo__color2">ens</span>
      </h1>
      <img className="button" onClick={handleGame} src={Button} alt="" />
      <div className="score__box">
      <h2 className="score">{score}</h2>
      </div>
    </div>
  );
};

export default GamePage;
