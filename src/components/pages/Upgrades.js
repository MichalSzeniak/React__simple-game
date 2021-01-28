import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

import '../styles/upgrades.scss';

const Upgrades = ({ upgrade, isRunning, bonus, bonusActive, score}) => {



  return (
    <>
      <div className="upgrades">
          <p>{score}</p>
        <div>
          <h2>{bonus} point for 1 second</h2>
          <button
            className={
              isRunning ? 'upgrade upgrade__on' : 'upgrade upgrade__off'
            }
            onClick={upgrade}
          ></button>
        </div>
        <button onClick={bonusActive}>upgrade</button>
      </div>
    </>
  );
};

export default Upgrades;
