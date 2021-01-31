import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/ErrorPage.scss'

const ErrorPage = () => {
    return (
        <div className="error">
            <h2>ERROR</h2>
            <NavLink to='/' className="error__button">
        Start
      </NavLink>
        </div>
    )
}

export default ErrorPage
