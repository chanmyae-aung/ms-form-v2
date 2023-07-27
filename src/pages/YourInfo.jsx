import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import FooterButton from "../components/FooterButton";
import { useCreateUserMutation, useGetUserQuery, useUpdateUserMutation } from "../api/userApi";
import { useDispatch } from "react-redux";
import { createUser, updateUser } from "../feature/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetFinishQuery } from "../api/planApi";

export default function YourInfo() {
  const pathName = useLocation()
  const [create] = useCreateUserMutation();
  const [update] = useUpdateUserMutation();
  const {data:existedUserData} = useGetUserQuery()
  console.log(existedUserData)

  const nav = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState(existedUserData?.data.name);
  const [email, setEmail] = useState(existedUserData?.data.email);
  const [phone, setPhone] = useState(existedUserData?.data.phone);


  const createHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, phone };
      if(existedUserData?.data) {
        const { data } = await update(user);
        dispatch(updateUser({ user: data.user }));
        data?.message === 'success' && nav("/plan")
      } else {
        const { data } = await create(user);
        dispatch(createUser({ user: data.user }));
        data?.message === 'success' && nav("/plan")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mt-10 lg:mx-auto h-full lg:h-auto w-full p-3 lg:p-0 rounded-lg relative lg:static -top-24 bg-white lg:rounded-none lg:w-[55%] flex flex-col justify-between">
      <div>
        <Title classes={"title"} text={"Personal Info"} />
        <p className="text-gray-400">
          Please provide your name, email address and phone number
        </p>
        <form onSubmit={createHandler} className="mt-10 h-full lg:h-auto flex flex-col justify-between">
          <div>
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. Stephen King"
              required
            />
          </div>
          <div className="my-5">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. stephenking@lorem.com"
              required
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Phone Number
            </span>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="phone"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. +959 123 456 789"
              required
            />
          </div>
          </div>
          <div className="w-full flex justify-end mt-20">
          <button
            className=" px-5 py-3 rounded bg-slate-800 text-white"
          >
            Next Step
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
