import React, {useState, useEffect} from 'react';
import '../styles/gamePage.scss'
import Button from '../../assets/button.svg';

const GamePage = () => {
  
  const [score, setScore] = useState(() => {
            const localData = localStorage.getItem('score');
            return localData ? JSON.parse(localData) : 0;
          });
        
          const handleButton = () => {
            setScore(score + 1);
          };
        
          useEffect(() => {
            localStorage.setItem('score', score);
          }, [score]);


  return (
        <div className="gamePage">
          <h1 className="logo">
            C<span className="logo__color1">lik</span>
            <span className="logo__color2">ens</span>
          </h1>
          <img className="button" onClick={handleButton} src={Button} alt="" />
          <div className="score__box">
              <h2 className="score">
              {score}
              </h2>
        </div>
        </div>
  )
}

export default GamePage