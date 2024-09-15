// Skills.jsx
import React from "react";
import SkillCategory from "./SkillCategory";
import { FaReact, FaAngular, FaDocker, FaPython } from "react-icons/fa";
import {
  DiMongodb,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { SiCplusplus, SiCsharp, SiDjango, SiDotnet, SiKubernetes } from "react-icons/si";

const iconStyle = "text-4xl"; // Tailwind class for icon size

// Define the skillsData object with icons and Tailwind styling
const skillsData = {
  Frontend: [
    {
      name: "React",
      icon: <FaReact className={`text-[#61DAFB] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: true },
        { level: "Expert", checked: false },
      ],
    },
    {
      name: "Angular",
      icon: <FaAngular className={`text-[#DD0031] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: false },
        { level: "Expert", checked: false },
      ],
    },
  ],
  Backend: [
    {
      name: "ASP.Net Core",
      icon: <SiDotnet className={`text-[#5C2D91] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: false },
        { level: "Expert", checked: false },
      ],
    },
    {
      name: "Django",
      icon: <SiDjango className={`text-[#32795d] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: true },
        { level: "Expert", checked: false },
      ],
    },
  ],
  DevOps: [
    {
      name: "Docker",
      icon: <FaDocker className={`text-[#2496ED] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: false },
        { level: "Advanced", checked: false },
        { level: "Expert", checked: false },
      ],
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className={`text-[#326CE5] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: false },
        { level: "Intermediate", checked: false },
        { level: "Advanced", checked: false },
        { level: "Expert", checked: false },
      ],
    },
  ],
  Databases: [
    {
      name: "PostgreSQL",
      icon: <DiPostgresql className={`text-[#336791] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: true },
        { level: "Expert", checked: false },
      ],
    },
    {
      name: "MongoDB",
      icon: <DiMongodb className={`text-[#4DB33D] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: false },
        { level: "Expert", checked: false },
      ],
    },
    {
      name: "MySQL",
      icon: <DiMysql className={`text-[#4479A1] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: false },
        { level: "Expert", checked: false },
      ],
    },
  ],
  Languages: [
    {
      name: "JavaScript",
      icon: <BiLogoJavascript className={`text-[#F7E018] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: true },
        { level: "Expert", checked: false },
      ],
    },
    {
      name: "Python",
      icon: <FaPython className={`text-[#306998] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: true },
        { level: "Expert", checked: true },
      ],
    },
    {
      name: "C++",
      icon: <SiCplusplus className={`text-[#00599C] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: true },
        { level: "Expert", checked: true },
      ],
    },
    {
      name: "C#",
      icon: <SiCsharp className={`text-[#68217A] ${iconStyle}`} />,
      milestones: [
        { level: "Basic", checked: true },
        { level: "Intermediate", checked: true },
        { level: "Advanced", checked: true },
        { level: "Expert", checked: true },
      ],
    },
  ],
};

const Skills = () => {
  return (
    <div className="p-8 max-w-screen-xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(skillsData).map(([category, skills], index) => (
        <SkillCategory key={index} category={category} skills={skills} />
      ))}
    </div>
  );
};

export default Skills;
