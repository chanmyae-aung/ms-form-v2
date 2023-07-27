import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import Title from "../components/Title";
import { Switch } from "@mantine/core";
import {
  useCreatePlanMutation,
  useGetOldPlanQuery,
  useGetPlanQuery,
  useUpdatePlanMutation,
} from "../api/planApi";
import { useDispatch } from "react-redux";
import { addPlan, updatePlan } from "../feature/planSlice";
import { useNavigate } from "react-router-dom";
import FooterButton from "../components/FooterButton";

export default function SelectPlan() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { data: planCard } = useGetPlanQuery();
  const plan = planCard?.data;
  console.log(planCard);
  const [switchPlan, setSwitchPlan] = useState(false);
  const [state, setState] = useState([]); //id
  console.log(state);


  useEffect(() => {
    planCard?.data.map(item => {
      if (item.is_choose) {
        setState({
          ids: item.id,
          type: item.is_month ? "month" : "year"
        })
      }
    })
    const yearPlan = plan?.find(item => item.is_year);
    if (yearPlan) {
      setSwitchPlan(!switchPlan)
    }
  }, [plan]);

  const [choosePlan] = useCreatePlanMutation();

  const handleSelect = (e) => {
    const selectedCard = document.querySelector(".selected");
    console.log(e.target);
    const value = plan.filter((i) => {
      const planTitle = e.target.lastChild.childNodes[0].innerHTML;
      console.log(planTitle);
      return planTitle === i.title;
    });
    console.log(value[0].id.toString());
    setState({
      id: value[0].id,
      type: !switchPlan ? "month" : "year",
    });
    console.log(value);
    if (selectedCard) {
      // Remove the "selected" class from the already selected Card
      selectedCard.classList.remove("selected");
    }

    e.target.classList.add("selected");
  };

  const handleSwitch = () => {
    const selectedCard = document.querySelector(".selected");
    setSwitchPlan(!switchPlan);
    if (selectedCard) {
      // Remove the "selected" class from the already selected Card
      selectedCard.classList.remove("selected");
    }

    // e.target.classList.add("selected");

  };
  const ConfirmPlan = async (e) => {
    e.preventDefault();
    const { data } = await choosePlan(state);
    console.log(data);
    dispatch(addPlan({ plan: state.type }));
    data?.message === "success" && nav("/add-ons");
  };

  return (
    <div className=" mt-10 rounded-lg h-full lg:h-auto relative lg:static -top-24 bg-white mx-auto px-5 lg:px-0 lg:w-[55%] flex flex-col justify-between">
      <div className="mt-5">
        <Title classes={"title"} text={"Select your plan"} />
        <p className="text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
        {/* {plan?.map((i) => console.log(i.is_choose))} */}
        {switchPlan === false ? (
          <div
            onClick={handleSelect}
            className="flex flex-col lg:flex-row lg:mt-10 my-5 gap-5"
          >
            {plan?.map((i) => {
              return (
                <Card
                  selectedCard={i.is_choose && i.is_month}
                  priceString={i.priceString}
                  key={i.id}
                  text={i.title}
                  icon={i.icon}
                  price={i.month_price}
                />
              );
            })}
          </div>
        ) : (
          <div
            onClick={handleSelect}
            className="flex flex-col lg:flex-row lg:mt-10 my-5 gap-5"
          >
            {plan?.map((i) => {
              return (
                <Card
                selectedCard={i.is_choose && i.is_year}
                  promotion={i.promotion}
                  priceString={i.priceYear}
                  key={i.id}
                  text={i.title}
                  icon={i.icon}
                  price={i.year_price}
                />
              );
            })}
          </div>
        )}
        <div className="p-2.5 mb-12 rounded bg-blue-100 flex items-center gap-5 justify-center">
          <span>Monthly</span>

          <Switch checked={switchPlan} size="sm" color="gray" onClick={handleSwitch} />
          <span>Yearly</span>
        </div>
      </div>
      <div>
        <FooterButton next={ConfirmPlan} />
      </div>
    </div>
  );
}
