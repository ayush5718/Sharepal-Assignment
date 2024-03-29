// src/pages/MyOrdersPage.js
import React, { useState } from "react";
import { MyOrders } from "../components/MyOrders";
import OrderStage from "../components/OrdersStage";
import RaiseTicket from "../components/RaiseTicket";
import CardPopup from "../components/CardPopup";

// import CardPopup from "../components/CardPopup";
const MyOrdersPage = () => {
  return (
    <div className="bg-slate-100">
      <MyOrders />
    </div>
  );
};

export default MyOrdersPage;
