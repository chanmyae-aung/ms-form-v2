import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import {
  useGetAddOnsQuery,
  useGetOldAddOnsQuery,
  useGetPlanQuery,
} from "../api/planApi";
import { useSelector } from "react-redux";

export default function ConfirmCard() {
  const { data: showAddOns } = useGetAddOnsQuery();
  const { data: showPlan } = useGetPlanQuery();
  const type = useSelector((state) => state.planSlice.plan);
  console.log(type);
  const addOnPrices =[]
  return (
    <div>
      {showPlan?.data.map((i) => {
        const planPrice = type === "month" ? i.priceString: i.priceYear;
        const planTotal = i.id && type === "month" ? i.month_price : i.year_price;
        console.log(planTotal)
        if (i.is_choose) {
          return (
            <div key={i.id}>
              <div className="p-5 rounded-lg bg-blue-50">
                <div className="flex justify-between">
                  <div>
                    <Title text={i.title} />
                    <Link to={"/"} className="text-blue-500 underline text-sm">
                      Change
                    </Link>
                  </div>
                  <p>{`${planPrice}`}</p>
                </div>
                <hr className="my-5" />
                <div className="flex flex-col gap-3">
                  {/* addons */}
                  {showAddOns?.data.map((item) => {
                    const addOnPrice = type === "month" ? item.month_price : item.year_price;
                    // priceValue?.map(i => addOnPrices.push(i))

                    if (item.is_choose) {
                      type === "month" ? addOnPrices.push(parseInt(item.month_value)) : addOnPrices.push(parseInt(item.year_value));
                      return (
                        <div key={item.id} className="flex justify-between">
                          <p>{item.title}</p>
                          <p>{`${addOnPrice}`}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="flex justify-between items-center my-4 mx-5">
                <p>{`Total (per ${type})`}</p>
                <p className="text-purple-600 font-bold text-lg">{`$ ${parseInt(planTotal) + addOnPrices.reduce((pv, cv) => pv+cv ,0)} ${type === "month" ? "/mo" : "/yr"}`}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
