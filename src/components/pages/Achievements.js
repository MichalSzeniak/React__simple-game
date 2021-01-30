import React from 'react';
import Achievement from './Achievement';
import '../styles/Achievements.scss';

const listOfAchievements = [
  {
    id: 1,
    name: 'kox',
    description: 'tylko koksy wbijaja takie osiągnięcie',
    scoree: 100,
    color: "#D9D9D9",
  },
  {
    id: 2,
    name: 'kilo-kox',
    description: 'tylko koksy wbijaja takie osiągnięcie',
    scoree: 1000,
    color: "#219653",
  },
  {
    id: 3,
    name: 'mega-kox',
    description: 'tylko koksy wbijaja takie osiągnięcie',
    scoree: 10000,
    color: "#F2994A",
  },
  {
    id: 4,
    name: 'tera-kox',
    description: 'tylko koksy wbijaja takie osiągnięcie',
    scoree: 100000,
    color: "#BB6BD9",
  },
  {
    id: 5,
    name: 'kox-kox',
    description: 'tylko koksy wbijaja takie osiągnięcie',
    scoree: 100000,
    color: "#EB5757",
  },
  {
    id: 6,
    name: 'turbo-kox',
    description: 'tylko koksy wbijaja takie osiągnięcie',
    scoree: 1000000,
    color: "#F2C94C",
  },
];

const Achievements = ({ achieveScore, setBgcolor }) => {
  const Achieves = listOfAchievements.map((item) => (
    <Achievement key={item.id} {...item} achieveScore={achieveScore} setBgcolor={setBgcolor}/>
  ));
  return (
    <>
      <div className="achievements">
        <h2>Achievements</h2>
        <div className="achievements__grid">{Achieves}</div>
      </div>
    </>
  );
};

export default Achievements;
