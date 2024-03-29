// import { Trash } from "lucide-react";
import { useState } from "react";
import ordersData from "../data/OrdersData";
import { useParams, useNavigate } from "react-router-dom";
import CardPopup from "./CardPopup";
import { Cart } from "./Cart";
import { Tooltip } from "react-tooltip";

export function MyOrders() {
  // Calculate total price

  const navigate = useNavigate();
  const customerOrders = ordersData.filter(
    (order) => order.customerName === "Sourabh"
  );

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenPopup = (orderId) => {
    const order = customerOrders.find((order) => order.orderId === orderId);
    setSelectedOrder(order);
  };

  const handleClosePopup = () => {
    setSelectedOrder(null);
  };
  const handleCartPage = (orderId) => {
    // Navigate to the Cart page with orderId as a URL parameter
    navigate(`/cart/${orderId}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <Tooltip id="my-tooltip" />
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          My Orders
        </h1>
        {/* <!-- Iterate over each order --> */}
        {customerOrders.map((order, index) => (
          <div
            key={order.orderId}
            className="my-8 p-4 bg-white rounded-lg shadow-md hover:shadow-xl border-3"
          >
            <div className="flex justify-between flex-col md:flex-row">
              <div className="left-section">
                <h2 className="text-lg font-semibold mb-2">
                  Order #{index + 1}
                </h2>
                <p>
                  <span className="font-semibold">Order ID:</span>{" "}
                  {order.orderId}
                </p>
                <p>
                  <span className="font-semibold">Order Status:</span>{" "}
                  {order.orderStage}
                </p>
              </div>
              <div className="right-section">
                <p>
                  <span className="font-semibold">Order Date:</span>{" "}
                  {order.orderDate}
                </p>
                <p>
                  <span className="font-semibold">Delivery Date:</span>{" "}
                  {order.deliveryDate}
                </p>
                <p>
                  <span className="font-semibold">Rental Start Date:</span>{" "}
                  {order.rentalStartDate}
                </p>
                <p>
                  <span className="font-semibold">Rental End Date:</span>{" "}
                  {order.rentalEndDate}
                </p>
              </div>
            </div>
            <hr />
            <div>
              <p>
                <span className="font-semibold">Total Amount:</span> ₹{" "}
                {order.rent}
              </p>
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="View your Order"
                onClick={() => handleOpenPopup(order.orderId)}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Order
              </button>{" "}
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Detailed View of Order"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleCartPage(order.orderId)}
              >
                View Order Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render CardPopup as a modal */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg">
          <CardPopup order={selectedOrder} onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
}
