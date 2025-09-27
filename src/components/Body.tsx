import React, { type FC, type JSX } from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Body: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex justify-center py-18">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Body;