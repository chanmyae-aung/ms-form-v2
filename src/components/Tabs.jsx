import React, { useEffect, useState } from "react";
import Title from "./Title";
import { useLocation } from "react-router-dom";

export default function Tabs({ step, text }) {
  // to know the changing of pathname, use useLocation hook
  const location = useLocation()
  const step1 = step === "1" && location.pathname === "/" && "active"
  const step2 = step === "2" && location.pathname === "/plan" && "active"
  const step3 = step === "3" && location.pathname === "/add-ons" && "active"
  const step4 = step === "4" && location.pathname === "/summary" && "active"
  // console.log(location.pathname)
  return (
    <div className=" flex gap-3 justify-center lg:justify-start mb-5 cursor-pointer">
      <h3
        className={`${step1 || step2 || step3 || step4 } w-8 h-8 border rounded-full flex items-center justify-center text-white`}
      >
        {step}
      </h3>
      <div className="hidden lg:block">
        <h4 className={` text-xs text-white`}>STEP {step}</h4>
        <Title classes={" sub-title"} text={text} />
      </div>
    </div>
  );
}
