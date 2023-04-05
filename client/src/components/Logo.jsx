import React from 'react'
import logoDark from '../img/Artboard 5.png';
import logoLight from '../img/Artboard 5 copy.png';

export default function Logo(props) {
    return (
        <div className="logo flex items-center space-x-2 my-3">
            <img src={props.dark ? logoDark : logoLight} alt="" width="40px" />
            <span className='dark:text-lightGreen text-xl'>bitrate</span>
        </div>
    )
}
