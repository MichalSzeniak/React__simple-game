import React from 'react';

import '../styles/upgrades.scss';

const Upgrades = ({
  setIsRunning,
  isRunning,
  bonus,
  bonusActive,
  score,
  handleClickBonus,
  clickBonus,
  handleBonusActiveFull,
}) => {

  const handleTurnOnOff = () => {
    setIsRunning(!isRunning)
  }

  return (
    <>
      <div className="upgrades">
        <p>SCORE: {score}</p>
        <div className="information">
          <div className="information__box">
            <p className="information__header">CLICK</p>
            <span>click = {clickBonus}</span>
          </div>
          <div className="information__box">
            <p className="information__header">AUTO-CLICK</p>
            <span>second = {bonus}</span>
          </div>
        </div>
        <div className="isActive">
              <p className="isActive__text">AUTO-CLICK is <span className="isActive__text--bold">{isRunning ? 'ON' : 'OFF'}</span></p>
              <button
                className={
                  isRunning ? 'upgrade upgrade__on' : 'upgrade upgrade__off'
                }
                onClick={handleTurnOnOff}
              ></button>
            </div>
        <div className="upgrade__section">
          <div className="upgrade__section--box">
            <p>Click upgrade</p>
            <button className={'upgrade__button'} onClick={handleClickBonus}>
              cost: 200
            </button>
            <p>
              x{Math.round(score/200)}
            </p>
          </div>
          <div className="upgrade__section--box">
            <p>Auto-Click upgrade</p>
            <button className={'upgrade__button'} onClick={bonusActive}>
              cost: 500
            </button>
            <p>
              x{Math.round(score/500)}
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrades;
