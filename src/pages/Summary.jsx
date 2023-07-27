import React, { useEffect, useState } from "react";
import ConfirmCard from "../components/ConfirmCard";
import Title from "../components/Title";
import FooterButton from "../components/FooterButton";
import ThankYou from "../components/ThankYou";

export default function Summary() {
  const [confirm, setConfirm] = useState(false)
  const Confirm = () => {
    setConfirm(!confirm)
  }
  return (
    <div className="mt-10 lg:mx-auto w-full bg-white p-3 lg:p-0 rounded-lg relative lg:static -top-24 lg:rounded-none lg:w-[55%] flex flex-col justify-between">
      <div className={`${confirm && "hidden"} h-full flex flex-col justify-between`}>
      <div>
        <div>
          <Title classes={"title"} text={"Finishing up"} />
          <p className="text-gray-400 mb-10 lg:mb-0">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <ConfirmCard />
      </div>
      <FooterButton next={Confirm}/>
      </div>
      <div className={`${!confirm && "hidden"} w-full h-full flex justify-center items-center`}>
        <ThankYou/>
      </div>
    </div>
  );
}
