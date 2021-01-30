import React from 'react';
import '../styles/_variables.scss'

const Achievement = ({ achieveScore, scoree, name, description, color, setBgcolor }) => {

  const HandleOnClick = () => {
    setBgcolor(color);
  }

  console.log(color)
  return (
    <div className="achievement__boxitem">
      {achieveScore >= scoree && (
        <div
          className="achievement__element"
          style={{ backgroundColor: color }}
          onClick={HandleOnClick}
        >
          <h2 className="achievement__name">{name}</h2>
          <p className="achievement__description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Achievement;
