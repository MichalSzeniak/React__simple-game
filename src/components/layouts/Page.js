import React from 'react'
import { Route } from 'react-router-dom';
import GamePage from './../pages/GamePage';

const Page = () => {
    return (
        <Route path="/" exact component={GamePage} />
    )
}

export default Page
