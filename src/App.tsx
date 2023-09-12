import { useState } from 'react'
import logo from './assets/Tooable-logos_black.png'
import { BiChevronsLeft } from 'react-icons/bi'
import { LuListChecks, LuChevronsRight, LuStickyNote } from 'react-icons/lu'
import { Link, Route, Routes } from 'react-router-dom'
import Today from './components/Today'
import Upcoming from './components/Upcoming'
import QuickNote from './components/QuickNote'

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

        <div className="flex items-center flex-col mb-10">
          <div className="flex flex-row justify-center my-5">
            <img className="w-10 h-10 rounded-lg" src={logo} alt="mainlogo" />
            {open && (
              <p className="self-center font-mono text-lg">
                <Link to="/">Tooable</Link>
              </p>
            )}
          </div>
        </div>

        {open && <p className="text-xs">Tasks</p>}
        <nav>
          <ul className="list-none">
            <li>
              <Link to="/">
                <div
                  className={`flex flex-row ${
                    !open && 'justify-center'
                  } my-5 hover:text-slate-600`}
                >
                  <span className="self-center">
                    <LuListChecks size={20} />
                  </span>
                  {open && <p className="pl-2">Today</p>}
                </div>
              </Link>
            </li>
            <li>
              <Link to="/upcoming">
                <div
                  className={`flex flex-row ${
                    !open && 'justify-center'
                  } my-5 hover:text-slate-600`}
                >
                  <span className="self-center">
                    <LuChevronsRight size={20} />
                  </span>
                  {open && <p className="pl-2">Upcoming</p>}
                </div>
              </Link>
            </li>
            <li>
              <Link to="/quicknote">
                <div
                  className={`flex flex-row ${
                    !open && 'justify-center'
                  } my-5 hover:text-slate-600`}
                >
                  <span className="self-center">
                    <LuStickyNote size={20} />
                  </span>
                  {open && <p className="pl-2">Quick Notes</p>}
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {open && <p className="text-xs mt-10">Lists</p>}
        {/**
         * Add Create list UI
         */}
        {open && <p className="text-xs mt-10">Tags</p>}
        {/**
         * Add Create tags UI
         */}
      </div>
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
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
