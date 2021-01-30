import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import GamePage from './../pages/GamePage';
import Achievements from './../pages/Achievements.js';
import Upgrades from './../pages/Upgrades';
import '../styles/page.scss';
import useInterval from '../useInterval';
import Settings from '../pages/Settings';

const Page = () => {
  const [score, setScore] = useState(() => {
    const localData = localStorage.getItem('score');
    return localData ? JSON.parse(localData) : 0;
  });

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  const [clickBonus, setclickBonus] = useState(() => {
    const localDataClickBonus = localStorage.getItem('clickBonus');
    return localDataClickBonus ? JSON.parse(localDataClickBonus) : 1;
  });

  useEffect(() => {
    localStorage.setItem('clickBonus', clickBonus);
  }, [clickBonus]);

  const [achieveScore, setAchieveScore] = useState(() => {
    const localAchieveScore = localStorage.getItem('achieveScore');
    return localAchieveScore ? JSON.parse(localAchieveScore) : 0;
  });

  useEffect(() => {
    localStorage.setItem('achieveScore', achieveScore);
  }, [score]);

  const [clickBonusActive, setClickBonusActive] = useState(false);

  const handleClickBonus = () => {
    setClickBonusActive(!clickBonusActive);
    if (score >= 200 && clickBonusActive) {
      setclickBonus(clickBonus + 1);
      setScore(score - 200);
    }
  };

  const handleButton = () => {
    setScore(score + clickBonus);
    setAchieveScore(achieveScore + clickBonus);
  };

  const [bonus, setBonus] = useState(() => {
    const localDataBonus = localStorage.getItem('bonus');
    return localDataBonus ? JSON.parse(localDataBonus) : 0;
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
      setAchieveScore(achieveScore + bonus);
    },
    isRunning ? 1000 : null,
  );

  const [bonusActive, setBonusActive] = useState(false);

  const handleBonusActive = () => {
    setBonusActive(!bonusActive);

    if (score >= 500 && bonusActive) {
      setBonus(bonus + 1);
      setScore(score - 500);
    }
  };

  const [bgColor, setBgcolor] = useState();

  return (
    <>
      <div className="page" style={{ backgroundColor: bgColor }}>
        <Route
          path="/"
          exact
          render={() => <GamePage score={score} handleGame={handleButton} />}
        />
        <Route
          path="/Upgrades"
          render={() => (
            <Upgrades
              upgrade={handleIsRunning}
              isRunning={isRunning}
              bonus={bonus}
              bonusActive={handleBonusActive}
              score={score}
              handleClickBonus={handleClickBonus}
              clickBonus={clickBonus}
            />
          )}
        />
        <Route
          path="/achievements"
          render={() => (
            <Achievements achieveScore={achieveScore} setBgcolor={setBgcolor} />
          )}
        />
        <Route path="/Settings" render={() => <Settings />} />
      </div>
    </>
  );
};

export default Page;
