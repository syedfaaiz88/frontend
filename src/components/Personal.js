// src/components/Personal.js
import React from "react";
import { BsEyeFill } from "react-icons/bs";
import {
  FaBirthdayCake,
  FaBriefcase,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHeart,
  FaHome,
  FaIdCard,
  FaLanguage,
} from "react-icons/fa";
import { GiBodyHeight, GiWeightScale } from "react-icons/gi";
import { IoMdMale } from "react-icons/io";
import { MdFlag } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const TooltipedIcon = ({ id, icon: Icon, tooltip }) => (
  <div>
    <Icon
      className="text-2xl text-gray-500 mr-2"
      data-tooltip-id={id}
      data-tooltip-content={tooltip}
    />
    <Tooltip id={id} place="left" />
  </div>
);

const Personal = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Personal"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h1 className="text-2xl font-semibold mb-2">Syed Faaiz</h1>
      </div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-3">
        <div className="flex items-center">
          <TooltipedIcon id="dob" icon={FaBirthdayCake} tooltip="Birthday" />
          <span>March 29, 2002</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="gender" icon={IoMdMale} tooltip="Gender" />
          <span>Male</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="height" icon={GiBodyHeight} tooltip="Height" />
          <span>5'6''</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="eye-color" icon={BsEyeFill} tooltip="Eye Color" />
          <span>Black</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon
            id="body-weight"
            icon={GiWeightScale}
            tooltip="Body Weight"
          />
          <span>55 kg</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="cnic" icon={FaIdCard} tooltip="CNIC" />
          <span>35202-0563375-1</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon
            id="religion"
            icon={FaHandHoldingHeart}
            tooltip="Religion"
          />
          <span>Muslim</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="nationality" icon={MdFlag} tooltip="Nationality" />
          <span>Pakistani</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="status" icon={FaHeart} tooltip="Marital Status" />
          <span>Single</span>
        </div>
                {/* New Fields */}
                <div className="flex items-center">
          <TooltipedIcon id="occupation" icon={FaBriefcase} tooltip="Occupation" />
          <span>Software Engineer</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="languages" icon={FaLanguage} tooltip="Languages Spoken" />
          <span>English, Urdu</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="education" icon={FaGraduationCap} tooltip="Education Level" />
          <span>Bachelor's Degree</span>
        </div>
        <div className="flex items-center">
          <TooltipedIcon id="address" icon={FaHome} tooltip="Address" />
          <span>Lahore, Pakistan</span>
        </div>
      </div>
    </div>
  );
};

export default Personal;
