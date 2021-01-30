import React from 'react';
import Achievement from './Achievement';
import '../styles/Achievements.scss';

const listOfAchievements = [
  {
    id: 1,
    name: 'first point',
    description: '🙂',
    scoree: 1,
    color: "#D9D9D9",
  },
  {
    id: 2,
    name: '100 points',
    description: 'first 100 points',
    scoree: 100,
    color: "#219653",
  },
  {
    id: 3,
    name: '500 points',
    description: '😁',
    scoree: 1000,
    color: "#F2994A",
  },
  {
    id: 4,
    name: '1000 points',
    description: '🐗',
    scoree: 5000,
    color: "#BB6BD9",
  },
  {
    id: 5,
    name: '5000 points',
    description: '🐱‍🏍',
    scoree: 10000,
    color: "#EB5757",
  },
  {
    id: 6,
    name: '10000 points',
    description: 'Kox 😎',
    scoree: 20000,
    color: "#F2C94C",
  },
  {
    id: 7,
    name: '10000 points',
    description: 'Kilo kox 😵',
    scoree: 100000,
    color: "#E6F5B0",
  },
  {
    id: 8,
    name: '10000 points',
    description: 'Mega kox 🧟‍♂️',
    scoree: 200000,
    color: "#BFB4FA",
  },
  {
    id: 9,
    name: '10000 points',
    description: 'Giga kox 🤠',
    scoree: 1000000,
    color: "#A38D5B",
  },
  {
    id: 10,
    name: '10000 points',
    description: 'Tera kox 🚀',
    scoree: 10000000,
    color: "#C777B8",
  },
];

const Achievements = ({ achieveScore, setBgcolor }) => {
  const Achieves = listOfAchievements.map((item) => (
    <Achievement key={item.id} {...item} achieveScore={achieveScore} setBgcolor={setBgcolor}/>
  ));
  return (
    <>
      <div className="achievements">
        <h2 className="achievements__header">Achievements</h2>
        <div className="achievements__grid">{Achieves}</div>
      </div>
    </>
  );
};

export default Achievements;
