import React from "react";
import Title from "./Title";

export default function AddOnCard({title, desc, price, id, checked, onchange}) {
  // const dynamicId = 1000 * Math.random()
  return (
    <div className="px-5 py-2.5 flex justify-between items-center border border-purple-700 rounded-lg">
      <div className="flex gap-5 items-center">
        <input onChange={onchange} type="checkbox" id={id} checked={checked} />
        <label>
          <Title text={title} classes={"font-semibold"}/>
          <p className="text-slate-400 truncate">{desc}</p>
        </label>
      </div>
      <p className="text-purple-600">{price}</p>
    </div>
  );
}
