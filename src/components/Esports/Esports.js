import React from 'react'
import { RiBilliardsFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Esports = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-gray-600">
        <div className="container mx-auto flex flex-wrap justify-around items-center">
          <Link
            to="8ballpool"
            className="flex flex-col items-center text-center p-2 md:p-4 hover:text-green-500 transition duration-300"
          >
            <RiBilliardsFill className="text-3xl md:text-3xl mb-2" />
            <h3 className="text-xs md:text-sm font-semibold">8 Ball Pool</h3>
          </Link>
        </div>
      </header>
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Esports