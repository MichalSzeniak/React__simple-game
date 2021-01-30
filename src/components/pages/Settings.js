import React, { useState } from 'react';
import '../styles/Settings.scss';

const Settings = ({ setScore, setBonus, setAchieveScore, setclickBonus }) => {
  const [active, setActive] = useState(false);

  const handleCLick = () => {
    setActive(!active);
  };

  const handleReset = () => {
    setScore(0);
    setBonus(0);
    setAchieveScore(0);
    setclickBonus(1);
  };

  const twoFunctions = () => {
    handleCLick();
    handleReset();
  }

  return (
    <div className="settings">
      <button className="confirmationButton resetButton" onClick={handleCLick}>
        RESET
      </button>
      {active ? (
        <div className="confirmationView">
          <p className="confirmationText">Are you sure?</p>
          <div className="confirmationBox">
            <button className="confirmationButton" onClick={handleCLick}>
              No
            </button>
            <button className="confirmationButton" onClick={twoFunctions}>
              Yes
            </button>
          </div>
        </div>
      ) : (
        []
      )}
    </div>
  );
};

export default Settings;
