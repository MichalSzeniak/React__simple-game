import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import GamePage from './../pages/GamePage';
import Achievements from './../pages/Achievements.js';
import Upgrades from './../pages/Upgrades';
import '../styles/page.scss';
import useInterval from '../useInterval';

const Page = () => {
  const [score, setScore] = useState(() => {
    const localData = localStorage.getItem('score');
    return localData ? JSON.parse(localData) : 0;
  });

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  const handleButton = () => {
    setScore(score + 1);
  };


  const [bonus, setBonus] = useState(() => {
    const localDataBonus = localStorage.getItem('bonus');
    return localDataBonus ? JSON.parse(localDataBonus) : 1;
  });

  useEffect(() => {
    localStorage.setItem('bonus', bonus);
  }, [bonus]);






  const [isRunning, setIsRunning] = useState(false);

  const handleIsRunning = () => {
    setIsRunning(!isRunning);
  };



  useInterval(
    () => {
      setScore(score + bonus);
    },
    isRunning ? 1000 : null,
  );

    const [bonusActive, setBonusActive] = useState(false)

    const handleBonusActive = () => {
      setBonusActive(!bonusActive)
    } 

    if(score >= 500 && bonusActive === true) {
      setBonus(bonus + 1);
      setScore(score - 500);
    }

  return (
    <>
      <div className="page">
        <Route
          path="/"
          exact
          render={() => <GamePage score={score} handleGame={handleButton} />}
        />
        <Route path="/achievements" render={() => <Achievements />} />
        <Route
          path="/Upgrades"
          render={() => (
            <Upgrades
              upgrade={handleIsRunning}
              isRunning={isRunning}
              bonus={bonus}
              bonusActive = {handleBonusActive}
              score={score}
            />
          )}
        />
      </div>
    </>
  );
};

export default Page;
