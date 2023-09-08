import { useState } from 'react'
import logo from './assets/Tooable-logos_black.png'
import { BiChevronsLeft } from 'react-icons/bi'
import { Link, Route, Routes } from 'react-router-dom'
import { ExtendedLinkProps } from './interfaces'
import Today from './components/Today'
import Upcoming from './components/Upcoming'
import QuickNote from './components/QuickNote'

const links: ExtendedLinkProps[] = [
  {
    to: '/',
    linkName: 'Today',
  },
  {
    to: '/upcoming',
    linkName: 'Upcoming',
  },
  {
    to: '/quicknote',
    linkName: 'Quick Note',
  },
]

const App: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex">
      <div
        className={`${
          open ? 'w-72' : 'w-30'
        } h-100 bg-light-grey relative rounded m-5 px-5`}
      >
        <div
          className={`absolute cursor-pointer rounded-full -right-3 
        top-9 border-2 text-white bg-black ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        >
          <BiChevronsLeft size={20} />
        </div>

        <div className="flex items-center flex-col">
          <div className="flex flex-row justify-center my-5">
            <img className="w-10 h-10 rounded-lg" src={logo} alt="mainlogo" />
            &nbsp;
            {open && <p className="self-center font-mono text-lg">Tooable</p>}
          </div>
        </div>

        <nav>
          <ul className="list-none">
            {links.map((linkdata: ExtendedLinkProps, index) => (
              <li key={index}>
                <Link to={linkdata.to}>{linkdata.linkName}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/**
         * Add Create list UI
         */}
      </div>
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
        {/**
         * Create Routes for side nav using react router
         */}
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/quicknote" element={<QuickNote />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
