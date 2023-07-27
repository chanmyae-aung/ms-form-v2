import React, { useEffect, useState } from "react";
import AddOnCard from "../components/AddOnCard";
import Title from "../components/Title";
import FooterButton from "../components/FooterButton";
import { useCreateAddOnsMutation, useGetAddOnsQuery } from "../api/planApi";
import { useDispatch, useSelector } from "react-redux";
import { addAddOns } from "../feature/planSlice";
import { useNavigate } from "react-router-dom";

export default function AddOns() {
  const [select, setSelect] = useState([]);
  const [type, setType] = useState(null)
  const { data: addOnCard } = useGetAddOnsQuery();
  console.log(addOnCard?.data);
  const [createAddOns] = useCreateAddOnsMutation();

  console.log(select);
  const addOn = addOnCard?.data
  
  const state = useSelector((state) => state.planSlice.plan);
  console.log(state);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const [data, setData] = useState(null)
  console.log(type)
  useEffect(() => {
    addOnCard?.data && setData(addOn)

    const selectedIds = addOn?.filter((item) => item.is_choose === 1).map((item) => item.id);
    setSelect(selectedIds);

  },[addOnCard?.data])
  console.log(data)
  const handleCheckboxChange = (id) => {
    console.log(id)
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, is_choose: item.is_choose === 1 ? 0 : 1 } : item
      )
    );
    const checkboxId = id
    setSelect((prevSelectedIds) => {
      // Check if the ID is already present in the array
      const isAlreadySelected = prevSelectedIds.includes(checkboxId);
  
      if (isAlreadySelected) {
        // If the ID is already in the array, remove it
        return prevSelectedIds.filter((id) => id !== checkboxId);
      } else {
        // If the ID is not in the array, add it
        return [...prevSelectedIds, checkboxId];
      }
    });
  };

  console.log(select)


  const handleConfirm = async (e) => {
    e.preventDefault();
    console.log(select)
    const { data: createData } = await createAddOns({
      ids: select,
      type: state,
    });
    console.log(createData);
    dispatch(addAddOns({ addOns: createData }));
    createData?.message === "success" && nav("/summary");
  };

  return (
    <div className=" mt-10 lg:mx-auto w-full h-full lg:h-auto p-3 lg:p-0 rounded-lg relative lg:static -top-24 bg-white lg:rounded-none lg:w-[55%] flex flex-col justify-between">
      <div className="">
        <Title classes={"title"} text={"Pick add-ons"} />
        <p className="text-gray-400 mb-8">
          Add-ons help enhance your gaming experiences.
        </p>
        <div className="flex flex-col gap-3">
          {data?.map((i) => {
            console.log(i)
            return (
              <div
                key={i.id}
                className="px-5 py-2.5 flex justify-between items-center border border-purple-700 rounded-lg"
              >
                <div className="flex gap-5 items-center">
                  <input
                    className="checkbox"
                    onChange={() => handleCheckboxChange(i.id)}
                    type="checkbox"
                    id={i.id}
                    checked={i.is_choose === 1}
                  />
                  <label>
                    <Title text={i.title} classes={"font-semibold"} />
                    <p className="text-slate-400 truncate">{i.desc}</p>
                  </label>
                </div>
                <p className="text-purple-600">{i.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <FooterButton next={handleConfirm} />
      </div>
    </div>
  );
}
