import { useEffect, useState } from "react";
import ordersData from "../data/OrdersData";
import { useParams, useNavigate } from "react-router-dom";
import CardPopup from "../components/CardPopup";
import { Cart } from "./Cart";
import RaiseTicket from "../components/RaiseTicket";
import OrderStage from "../components/OrdersStage";
import OrderCard from "../components/OrderCard";

export const MyOrders = () => {
  const navigate = useNavigate();
  const customerOrders = ordersData.filter(
    (order) => order.customerName === "Sourabh"
  );

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showRaiseTicket, setshowRaiseTicket] = useState(null);

  const handleOpenPopup = (orderId) => {
    const order = customerOrders.find((order) => order.orderId === orderId);
    setSelectedOrder(order);
  };

  const handleClosePopup = () => {
    setSelectedOrder(null);
  };

  const handleCartPage = (orderId) => {
    navigate(`/cart/${orderId}`);
  };

  const handleOpenTicketModal = (orderId) => {
    setshowRaiseTicket(orderId);
  };

  const handleCloseTicketModal = () => {
    setshowRaiseTicket(null);
  };

  return (
    <div className="mx-auto max-w-7xl lg:px-0 bg-white md:p-7 p-2 py-8">
      <div className="mx-auto  py-4 ">
        <h1 className="text-3xl w-full text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
          My Orders
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3 my-4">
          {customerOrders?.map((order, index) => (
            <OrderCard
              key={order?.orderId}
              order={order}
              handleCartPage={handleCartPage}
              handleOpenPopup={handleOpenPopup}
              handleOpenTicketModal={handleOpenTicketModal}
              index={index}
            />
          ))}
        </div>
      </div>

      {showRaiseTicket && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg"
          onClick={handleCloseTicketModal}
        >
          <RaiseTicket
            orderId={showRaiseTicket}
            onClose={handleCloseTicketModal}
          />
        </div>
      )}

      {selectedOrder && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg"
          onClick={handleClosePopup}
        >
          <CardPopup order={selectedOrder} onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
};
