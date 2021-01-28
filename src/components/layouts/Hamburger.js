import React from 'react'
import '../styles/Hamburger.scss'

const Hamburger = ({click, handleClass}) => {
    return (
        <button className={handleClass ? "hamburger hamburger_active" : "hamburger"} onClick={click}>
        <span className="hamburger__box">
            <span className="hamburger__inner">
                
            </span>
        </span>
    </button>
    )
}

export default Hamburger
