import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon, faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function themeToggler(props) {
    return (
        <div className='hidden md:block'>
            <input type="checkbox" className="checkbox" id="checkbox" checked={!props.dark} onChange={handleTheme} />
            <label htmlFor="checkbox" className="checkbox-label dark:bg-lightGreen bg-slate-900">
                <FontAwesomeIcon icon={faMoon} className="fa-moon" />
                <FontAwesomeIcon icon={faSun} className="fa-sun" />
                <span className="ball dark:bg-black bg-lightGreen"></span>
            </label>
        </div>
    )

    function handleTheme() {
        if (props.dark)
            props.setDark(false)
        else
            props.setDark(true)
    }
}
