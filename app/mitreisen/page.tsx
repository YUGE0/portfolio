import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import RenderImg from './RenderImg'

export default function Page() {
  return (
    <div className="mx-1 md:mx-10 mb-10 rounded-[3rem] border-2 border-b-0 border-fcolor font-work">
      <div className="p-10 flex items-center justify-between">
        <Link
          className="text-3xl md:text-6xl font-semibold"
          href="https://github.com/YUGE0/Mitreisen"
          target="_blank"
        >
          Mitreisen
        </Link>
        <Link className="flex justify-end" href="https://github.com/YUGE0/Mitreisen" target="_blank">
          <Image className="w-2/6 md:w-3/6 lg:w-4/6" src="/visit.svg" width={100} height={0} alt="visit" />
        </Link>
      </div>
      <p className="p-4 md:p-10 text-xl md:text-2xl font-medium">
        Mitreisen is a multi-modal travel booking system I built during my internship at Skywinds
        Solutions. It allows users to search and book flights, trains, hotels, and tours from a
        single platform. The project was developed using the MERN stack, with React.js on the
        frontend based on Figma designs, Node.js and Express for APIs, and MongoDB for data
        storage. It was my first real exposure to full-stack development, team workflows, and
        building production-oriented features end to end.
      </p>
      <RenderImg />
      <div className="md:p-16">
        <h1 className="mt-2 p-4 text-2xl md:text-5xl font-work font-semibold">About</h1>
        <div className="flex flex-wrap 2xl:flex-nowrap justify-around items-center">
          <Image className="md:w-1/2 md:p-10" src="/HomePage.png" width={1500} height={500} alt="Mitreisen home page" />
          <div className="p-10 rounded-[3rem] bg-fcolor text-white w-[80rem]">
            <h1 className="text-3xl font-medium font-inter">Home Page</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              The home page serves as the central hub for the entire booking experience. Users can
              switch between flights, trains, and hotels from a unified interface, search for
              destinations, and access authentication flows including login and signup — all
              designed from Figma mockups and translated into responsive React components.
            </p>
            <h1 className="text-3xl font-medium font-inter">Multi-Modal Search</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              Instead of separate apps for each travel type, Mitreisen combines flights, trains,
              and hotels under one roof. Each mode has its own search form and results layout while
              sharing a consistent design language, making it easy for users to plan complete trips
              without leaving the platform.
            </p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              Building the home page taught me how to break a large Figma design into reusable React
              components, manage conditional UI for different booking types, and structure a
              frontend that scales as new travel modules are added.
            </p>
          </div>
        </div>
        <div className="md:p-10 flex flex-wrap 2xl:flex-nowrap justify-around items-center">
          <Image className="md:w-1/2 md:p-10" src="/FlightsPage.png" width={1500} height={500} alt="Mitreisen flights booking" />
          <div className="p-10 rounded-[3rem] bg-fcolor text-white w-[80rem]">
            <h1 className="text-3xl font-medium font-inter">Booking Pages</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              Dedicated booking flows exist for flights, trains, and hotels. Each module guides the
              user from browsing available options to confirming a reservation, with clear steps
              for selecting dates, passengers, and preferences before completing the booking.
            </p>
            <h1 className="text-3xl font-medium font-inter">Dynamic Data</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              Booking pages fetch data from backend APIs built with Node.js and Express. Search
              results, availability, and pricing are rendered dynamically in React, giving users
              up-to-date information as they move through the booking process.
            </p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              This was where I learned to integrate REST APIs into a React frontend, handle loading
              and empty states, and design user flows that feel intuitive even when the underlying
              data and logic are complex.
            </p>
          </div>
        </div>
        <div className="md:p-10 flex flex-wrap 2xl:flex-nowrap justify-around items-center">
          <Image className="md:w-1/2 md:p-10" src="/AMDDestPage.png" width={1500} height={500} alt="Mitreisen destination page" />
          <div className="p-10 rounded-[3rem] bg-fcolor text-white w-[80rem]">
            <h1 className="text-3xl font-medium font-inter">Destinations & Tours</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              Beyond standard bookings, Mitreisen includes destination pages and tour packages. Users
              can explore curated travel experiences, view tour details, and proceed to book
              directly — extending the platform beyond point-to-point travel into full trip
              planning.
            </p>
            <h1 className="text-3xl font-medium font-inter">Routing</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              Dynamic routing connects the home page, booking modules, destination views, and tour
              pages into a seamless navigation experience. Each route loads the appropriate
              components and data without full page reloads.
            </p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              Implementing destination and tour modules helped me understand dynamic routing in
              React, how to structure pages that share layouts but differ in content, and how to
              present rich travel content in a clean, scannable way.
            </p>
          </div>
        </div>
        <div className="md:p-10 flex flex-wrap 2xl:flex-nowrap justify-around items-center">
          <Image className="md:w-1/2 md:p-10" src="/AdminSum.png" width={1500} height={500} alt="Mitreisen admin dashboard" />
          <div className="p-10 rounded-[3rem] bg-fcolor text-white w-[80rem]">
            <h1 className="text-3xl font-medium font-inter">Admin Dashboard</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              An admin panel gives operators an overview of bookings, users, and platform activity.
              It supports managing the content and data that powers the user-facing booking
              experience, making Mitreisen a complete system rather than just a frontend prototype.
            </p>
            <h1 className="text-3xl font-medium font-inter">Full-Stack Scope</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              Working on both the admin side and the user-facing app gave me end-to-end perspective
              — from MongoDB schemas and Express routes to React dashboards and booking forms. It
              was my first time connecting every layer of a web application together.
            </p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
              The admin module introduced me to dashboard design, role-based views, and backend
              operations like CRUD over travel data. It also reinforced how frontend and backend
              teams must align on data models and API contracts for a product to work smoothly.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 p-10 flex items-baseline flex-wrap justify-around rounded-b-[3rem] bg-fcolor">
        <h1 className="pb-4 text-3xl font-medium font-inter text-white">Explore by your own:</h1>
        <div className="flex flex-wrap gap-10">
          <Link
            className="px-10 p-5 rounded-xl shadow-md text-lg font-work font-semibold bg-white hover:bg-black/70 hover:text-white"
            href="https://github.com/YUGE0/Mitreisen"
            target="_blank"
          >
            Github Repository
          </Link>
        </div>
      </div>
    </div>
  )
}
