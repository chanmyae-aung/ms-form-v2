import React from "react";
import { Route, Routes } from "react-router-dom";
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import BaseLayout from "./components/BaseLayout";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <BaseLayout>
        <Sidebar />
        <Routes>
          {/* <Route> */}
          <Route path="/" element={<YourInfo />} />
          <Route path="/plan" element={<SelectPlan />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
          {/* </Route> */}
        </Routes>
      </BaseLayout>
    </div>
  );
}
