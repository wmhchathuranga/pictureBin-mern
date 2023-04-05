import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';

export default function HomeHeader() {
  return (
    <div className='pt-16 md:px-0 px-4 dark:bg-gradient-to-r from-slate-900 via-slate-800/20 to-slate-900 h-full flex justify-center'>
      <div className="flex flex-col justify-center items-center h-4/6 md:w-1/2 rounded-lg border-dashed border-green-500 border-2">
        <div className="md:w-1/2 space-y-3 mb-4">
          <p className='dark:text-white text-center font-bold text-lg' style={{ fontFamily: "Inter" }}>We Provide...</p>
          <p className='dark:text-white text-center text-3xl pb-3 font-sans font-bold main-header mb-4'>A Reliable Online Gallery for everyone. <br /> <br className='block md:hidden' />
            <hr className='my-4' />
            <TypeAnimation
              sequence={[
                ' Just Copy it...!', // Types 'One'
                2500, // Waits 1s
                ' Paste it...!', // Deletes 'One' and types 'Two'
                2500, // Waits 2s
                ' Share it...!',
                2500, // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              speed={1}
              deletionSpeed={1}
              cursor={true}
              repeat={3}
              style={{ fontFamily: "Inter" }}
              className="dark:text-lightGreen text-slate-600"
            />
          </p>

        </div>
        <button className="button shadow shadow-black dark:bg-lightGreen md:dark:bg-slate-800 ">
          <span className="button-content text-slate-700 md:dark:text-white md:font-normal font-bold" style={{ fontFamily: "Inter" }}>
            <FontAwesomeIcon icon={faComputer} className="fa-computer" /> &nbsp; Add From Computer
          </span>
        </button>
      </div>

    </div>
  )
}
