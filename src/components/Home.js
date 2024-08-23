// src/components/Home.js
import React from "react";
import { FaBriefcase, FaGraduationCap, FaRunning } from "react-icons/fa";
import Sidebar from "./UI/Sidebar";
import { LiaBarsSolid } from "react-icons/lia";
import { IoShareSocialSharp } from "react-icons/io5";

export const Home = () => {
  const items = {
    barsIcon: <LiaBarsSolid />,
    links: [
      {
        text: 'Portfolio',
        icon: <FaBriefcase />,
        route: '/portfolio',
      },
      {
        text: 'Fitness',
        icon: <FaRunning />,
        route: '/fitness',
      },
      {
        text: 'Education',
        icon: <FaGraduationCap />,
        route: '/education',
      },
      {
        text: 'Social',
        icon: <IoShareSocialSharp />,
        route: '/social',
      },
    ],
  };

  return (
    <div className="flex h-screen">
      <Sidebar items={items} />
      <div className="flex-1 p-8 bg-white">
        <h1 className="text-3xl font-bold mb-6">Home</h1>
        <p className="text-lg">Welcome to the Home page!</p>
      </div>
    </div>
  );
};
