import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function FooterButton({next}) {
  const nav = useNavigate();
  const home = location.pathname === "/";
  const plan = location.pathname === "/plan";
  const addOns = location.pathname === "/add-ons";
  const confirm = location.pathname === "/summary";

  return (
    <div
      className={`pb-2 w-full lg:static bottom-0 lg:mt-0 flex items-center ${
        home ? "justify-end" : "justify-between"
      }`}
    >
      {!home && (
        <button
          onClick={() => nav(-1)}
          className="text-gray-400 hover:text-slate-700"
        >
          Go back
        </button>
      )}
      <div onClick={next}>
      <Button
        // onclick={() => {
        //   if (home) {
        //     nav("/plan");
        //   } else if (plan) {
        //     nav("/add-ons");
        //   } else nav("/summary");
        // }}
        text={!confirm ? "Next Step" : "Confirm"}
      />
      </div>
    </div>
  );
}
