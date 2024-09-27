//Clocko page
import Image,{ StaticImageData } from 'next/image'
import React from 'react'
import cw from './ClockWhite.png'
import cd from './ClockDark.png'
import ParallaxImage from '../compo/ParallaxImage'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="mx-10 mb-10 rounded-[3rem] border-2 border-[#2A4064]">
      <div className="p-10 flex items-baseline justify-between">
        <Link className="text-5xl font-work font-semibold" href="https://cl0cko.vercel.app/">Clocko</Link>
        <Link className="p-2 px-10 text-3xl font-work font-semibold rounded-xl bg-[#2A4064]/80 text-white shadow-md hover:bg-white hover:shadow-[#2A4064] hover:text-[#2A4064]" href="https://cl0cko.vercel.app/">Visit</Link>
      </div>
      <p className="px-16 mt-10 text-2xl font-medium">
        I used to use a clock while studying, especially when I learned React.js. 
        Then I thought, "Why not create a meaningful project?". 
        Many of us have created business cards, profile cards, 
        and even some clones of popular applications while learning. 
        While I did the same, I worked on this project while learning React. 
        It incorporates all the concepts like props, components, hooks, and 
        conditional rendering with a special touch of Tailwind CSS.
      </p>
      <div className="px-10">
       <ParallaxImage src={cw} alt="Clock Light" cap="Light"/>
       <ParallaxImage src={cd} alt="Clock Dark" cap="Dark"/>
      </div>
      <div className="p-16">
        <h1 className="text-5xl font-work">About</h1>
        <div className="p-10 flex items-center">
          <Image className="p-10" src={"/Hours.png"} width={800} height={500} alt="Hours" />
          <div className="ml-8 p-10 rounded-[3rem] bg-[#2A4064] text-white">
            <h1 className="text-3xl font-medium font-inter">Hours</h1>
            <p className="text-xl font-inter font-light text-balance">The time is displayed in a 24-hour format, which has the constructive advantage of quickly capturing users' attention by using big and bold hours.</p>
            <h1 className="text-3xl font-medium font-inter">Seconds</h1>
            <p className="text-xl font-inter font-light text-balance">Seconds is a critical component requiring rendering at very brief intervals.</p>
            <h1 className="text-3xl font-medium font-inter">AM/PM</h1>
            <p className="text-xl font-inter font-light text-balance">The 24-hour format is used, but having an AM/PM indicator can greatly help users quickly determine whether it is morning or afternoon, especially during scheduled meetings or when involved in lengthy projects.</p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-xl font-inter font-light text-balance">The components are all in the Hours.JSX file. Rendering the hours and the am/pm indicator is quite easy, but rendering the seconds is a task that requires deeper thought. Using a timeout can work, 
              but it creates unnecessary app glitches that can affect the user experience. 
              However, React provides us useEffect, which makes it behave exactly as it should.
            </p>
          </div>
        </div>
        <div className="p-10 flex items-center">
          <Image className="p-10" src={"/Minutes.png"} width={800} height={500} alt="Hours" />
          <div className="ml-8 p-10 rounded-[3rem] bg-[#2A4064] text-white">
            <h1 className="text-3xl font-medium font-inter">Minutes</h1>
            <p className="text-xl font-inter font-light text-balance">Second challenging component after seconds. All the understanding and knowledge of developing it and the challenges while solving it came in handy to make this component quickly.</p>
            <h1 className="text-3xl font-medium font-inter">Day</h1>
            <p className="text-xl font-inter font-light text-balance">
            It ensures you don't miss your weekend, one of the simplest to include. While full names for days could be used, this approach adds a unique element to the application.</p>
            <h1 className="text-3xl font-medium font-inter">Date</h1>
            <p className="text-xl font-inter font-light text-balance">Maintaining the date in this manner is more meaningful than adhering to the conventional format. Presenting the date without the inclusion of the month and year offers a more concise and precise representation.</p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-xl font-inter font-light text-balance">In this context, the emphasis lay in selecting the most suitable aesthetic for the application, while the developmental approaches remained consistent with earlier components. By delineating the day and date in a manner that distinguishes it, the website can be rendered more streamlined.
            </p>
          </div>
        </div>
        <div className="p-10 flex items-center">
          <Image className="p-10" src={"/City.png"} width={800} height={500} alt="Hours" />
          <div className="ml-8 p-10 rounded-[3rem] bg-[#2A4064] text-white">
            <h1 className="text-3xl font-medium font-inter">City Name</h1>
            <p className="text-xl font-inter font-light text-balance">The system can display the local time based on the user's specified city and its offset to Coordinated Universal Time (UTC). Users can input any city of their choice, and all corresponding information will be promptly displayed upon integration into the code.</p>
            <h1 className="text-3xl font-medium font-inter">Time</h1>
            <p className="text-xl font-inter font-light text-balance">As a user can add any time, the web has all the information available on simple search. Therefore, they can get the UTC offset, and minor changes in the code will display the correct time.</p>
            <h1 className="text-3xl font-medium font-inter">AM/PM</h1>
            <p className="text-xl font-inter font-light text-balance">The 24-hour format is used, but having an AM/PM indicator can greatly help users.This is particularly beneficial when navigating scheduled meetings in different time zones or when engaged in extensive projects.</p>
            <h1 className="text-3xl font-medium font-inter">Theme</h1>
            <p className="text-xl font-inter font-light text-balance">The theme feature offers users the ability to customize their visual presentation by selecting a dark or light mode. Given the current preference for dark themes among users, providing this option is advantageous.</p>
            <h1 className="text-3xl font-medium font-inter">Full Screen</h1>
            <p className="text-xl font-inter font-light text-balance">Utilizing a full-screen display allows users to maximize the available display area. This feature can serve as a screensaver, providing a visual indication of the passage of time.</p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-xl font-inter font-light text-balance">The interface of this application is notable for its full-screen display and dark theme. Furthermore, the implementation of time display for various cities requires careful consideration, as it involves adjusting the UTC offset to accurately reflect the time difference. The theme feature allows users to personalize their preferred visual presentation, whether opting for a dark or light mode. With a full-screen display, users can maximize their utilization of the available screen space.</p>
          </div>
        </div>
      </div>
      <div className="p-10 flex items-baseline flex-wrap justify-around rounded-b-[3rem] bg-[#2A4064]">
        <h1 className="text-3xl font-medium font-inter text-white">Explore by your own:</h1>
        <Link className="px-10 p-5 rounded-xl shadow-md text-2xl font-work font-semibold bg-white hover:bg-black/70 hover:text-white" href="https://github.com/YUGE0/Clock">Github Repository</Link>
        <Link className="px-10 p-5 rounded-xl shadow-md text-2xl font-work font-semibold bg-white hover:bg-black/70 hover:text-white" href="https://cl0cko.vercel.app/">Deployed site</Link>
      </div>
    </div>
  )
}
