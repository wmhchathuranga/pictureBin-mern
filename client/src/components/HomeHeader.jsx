import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function HomeHeader() {
  return (
    <div className='h-screen md:px-0 px-4 dark:bg-gradient-to-r from-slate-900 via-slate-800/20 to-slate-900'>
      <div className="flex flex-col justify-center items-center h-4/6">
        <div className="md:w-1/2 space-y-3 mb-4">
          <p className='dark:text-white text-center font-bold text-lg' style={{ fontFamily: "Inter" }}>We Guarantee...</p>
          <p className='dark:text-white text-center text-3xl md:text-5xl pb-3 font-sans font-bold main-header'>The Best Innovative Solutions with <br className='block md:hidden' />
            <TypeAnimation
              sequence={[
                ' Latest Technologies!', // Types 'One'
                2500, // Waits 1s
                ' Stable Dependencies!', // Deletes 'One' and types 'Two'
                2500, // Waits 2s
                ' Custom Updates!',
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
          <p className='dark:text-white text-center font-medium dark:font-normal pb-2' style={{ fontFamily: "Inter" }}>Welcome to the Next Level of Software Solutions! You are not in another ordiary Web Application. Admit it, You can experience the real power of Web Technologies throughout this web site. Make your own choices of buttons, team cards, chat designs and much more...</p>

        </div>
        <button className="button shadow shadow-black dark:bg-lightGreen md:dark:bg-slate-800 ">
          <span className="button-content text-slate-700 md:dark:text-lightGreen md:font-normal font-bold" style={{ fontFamily: "Inter" }}>Contact Us </span>
        </button>
      </div>
      <section>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-3xl text-white text-center font-bold' style={{ fontFamily: "Inter" }}>Introduction to Our Technologies</h1>
          <p className='text-center text-white w-1/2'>First, We would love to make You aware of few Powerful Technologies we use to Provide you a Next Level Solution. Feel free to choose the technology you wish to have for the Project</p>
        </div>
      </section>
    </div>
  )
}
