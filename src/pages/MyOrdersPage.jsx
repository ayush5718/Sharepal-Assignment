// src/pages/MyOrdersPage.js
import React from "react";
import { MyOrders } from "../components/MyOrders";
import OrderStage from "../components/OrdersStage";
import RaiseTicket from "../components/RaiseTicket";
import CardPopup from "../components/CardPopup";

// import CardPopup from "../components/CardPopup";
const MyOrdersPage = () => {
  return (
    <div>
      <h1 className="text-center">My Orders</h1>
      <MyOrders />
      {/* <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg">
        <RaiseTicket />
      </div> */}

      {/* <OrderStage /> */}
      {/* <CardPopup /> */}
    </div>
  );
};

export default MyOrdersPage;
