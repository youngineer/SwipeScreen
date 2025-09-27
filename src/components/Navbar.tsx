import React, { type FC, type JSX } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import Button from './Button'

const Navbar: FC = (): JSX.Element => {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <h1 className="mx-px text-2xl font-bold left-xl fixed">swipeScreen</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-8 right-0 fixed">
                <li><Link to={'/candidate'} className='text-lg px-2'>
                  Candidate Page
                </Link></li>
                <li><Link to={'/interviewer'} className='text-lg px-2'>
                  Interviewer Page
                </Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar