// src/pages/MyOrdersPage.js
import React, { useState } from "react";
import { MyOrders } from "../components/MyOrders";
import OrderStage from "../components/OrdersStage";
import RaiseTicket from "../components/RaiseTicket";
import CardPopup from "../components/CardPopup";

// import CardPopup from "../components/CardPopup";
const MyOrdersPage = () => {
  const [showRaiseTicket, setshowRaiseTicket] = useState(null);
  const handleOpenTicketModal = () => {
    setshowRaiseTicket(1);
  };
  const handleCloseTicketModal = () => {
    setshowRaiseTicket(null);
  };
  return (
    <div>
      <h1 className="text-center">My Orders</h1>
      <MyOrders />
      {/* <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg">
        <RaiseTicket />
      </div> */}

      <button onClick={handleOpenTicketModal}>open raise ticket</button>
      {showRaiseTicket && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg">
          <RaiseTicket onClose={handleCloseTicketModal} />
        </div>
      )}

      {/* <OrderStage /> */}
      {/* <CardPopup /> */}
    </div>
  );
};

export default MyOrdersPage;
