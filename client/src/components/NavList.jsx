import React from 'react'

export default function NavList() {
    return (
        <div className="hidden md:flex">
            <nav className='dark:text-white font-medium'>
                <ul className='flex gap-x-5 items-center justify-between'>
                    <li className='hover:text-lightGreen transition-all duration-700'>Contact</li>
                    <li className='hover:text-lightGreen transition-all duration-700'>Privacy</li>
                    <li className='hover:text-lightGreen transition-all duration-700'>Community</li>
                    <li className='hover:text-lightGreen transition-all duration-700'>Portfolios</li>
                </ul>
            </nav>
        </div>
    )
}
