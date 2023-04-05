import React from 'react'

export default function NavList() {
    return (
        <div className="hidden md:flex w-40">
            <nav className='dark:text-white font-medium'>
                <ul className='flex gap-x-5 items-center justify-between'>
                    <li className='hover:text-lightGreen cursor-pointer transition-all duration-700'>Home</li>
                    <li className='hover:text-lightGreen cursor-pointer transition-all duration-700'>My Gallery</li>
                </ul>
            </nav>
        </div>
    )
}
