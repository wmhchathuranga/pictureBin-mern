import React from 'react'
import logoDark from '../img/logo.png';
import logoLight from '../img/logo.png';

export default function Logo(props) {
    return (
        <div className="logo flex items-center space-x-2 my-3 w-40 cursor-pointer">
            <img src={props.dark ? logoDark : logoLight} alt="" width="40px" />
            <span className='dark:text-lightGreen text-xl'>PictureBin</span>
        </div>
    )
}
