import React from 'react'
import { Link } from 'react-router-dom';

export default function NavList() {
    return (
        <div className="hidden md:flex w-40">
            <nav className='dark:text-white font-medium'>
                <ul className='flex gap-x-5 items-center justify-between'>
                    <li className='hover:text-lightGreen cursor-pointer transition-all duration-700'>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className='hover:text-lightGreen cursor-pointer transition-all duration-700'>
                        <Link to={"/gallery"}>My Gallery</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
