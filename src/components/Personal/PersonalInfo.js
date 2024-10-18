import React from "react";
import {
  FaBirthdayCake,
  FaBriefcase,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHome,
  FaIdCard,
  FaLanguage,
} from "react-icons/fa";
import { GiBodyHeight, GiWeightScale } from "react-icons/gi";
import { IoMdMale } from "react-icons/io";
import { MdFlag } from "react-icons/md";
import { ImManWoman } from "react-icons/im";
import { BsEyeFill } from "react-icons/bs";
import InfoItem from "../UI/InfoItem";

export const PersonalInfo = () => {
  const infoData = [
    { icon: FaBirthdayCake, tooltip: "Birthday", value: "March 29, 2002" },
    { icon: IoMdMale, tooltip: "Gender", value: "Male" },
    { icon: GiBodyHeight, tooltip: "Height", value: "5'6''" },
    { icon: BsEyeFill, tooltip: "Eye Color", value: "Black" },
    { icon: GiWeightScale, tooltip: "Body Weight", value: "55 kg" },
    { icon: FaIdCard, tooltip: "CNIC", value: "35202-0563375-1" },
    { icon: FaHandHoldingHeart, tooltip: "Religion", value: "Muslim" },
    { icon: MdFlag, tooltip: "Nationality", value: "Pakistani" },
    { icon: ImManWoman, tooltip: "Marital Status", value: "Single" },
    { icon: FaBriefcase, tooltip: "Occupation", value: "Software Engineer" },
    { icon: FaLanguage, tooltip: "Languages Spoken", value: "English, Urdu" },
    { icon: FaGraduationCap, tooltip: "Education Level", value: "Bachelor's Degree" },
    { icon: FaHome, tooltip: "Address", value: "Lahore, Pakistan" },
  ];

  return (
    <div className="text-xs md:text-sm space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {infoData.map((item, index) => (
        <InfoItem key={index} icon={item.icon} tooltip={item.tooltip} value={item.value} />
      ))}
    </div>
  );
};
