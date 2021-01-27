import React from 'react';
import { Route } from 'react-router-dom';
import GamePage from './../pages/GamePage';
import Achievements from './../pages/Achievements.js'
import '../styles/page.scss'

const Page = () => {
  return (
    <>
      <div className="page">
        <Route path="/" exact component={GamePage} />
        <Route path="/achievements" exact component={Achievements} />
      </div>
    </>
  );
};

export default Page;
