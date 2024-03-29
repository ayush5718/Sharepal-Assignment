import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ordersData from "../data/OrdersData";
import { useEffect } from "react";
import OrderStage from "../components/OrdersStage";
import Stepper from "@keyvaluesystems/react-stepper";
import "../index.css";

export const Cart = () => {
  const navigate = useNavigate();
  const [selectedStage, setSelectedStage] = useState(null);
  const { orderId } = useParams();
  const [orderProducts, setOrderProducts] = useState([]);
  const [order, setOrder] = useState(null);
  const [orderStage, setorderStage] = useState("");
  const handleOpenStage = () => {
    setSelectedStage(1);
  };

  const handleCloseStage = () => {
    setSelectedStage(null);
  };
  useEffect(() => {
    // Find the order based on orderId
    const foundOrder = ordersData.find((order) => order.orderId === orderId);
    setorderStage(foundOrder.orderStage);
    if (foundOrder) {
      setOrder(foundOrder);
      setOrderProducts(foundOrder.products);
    } else {
      // If order not found, set orderProducts to an empty array
      setOrderProducts([]);
    }
  }, [orderId]);

  // Render loading if order is still loading
  if (!order) {
    return <div>Loading...</div>;
  }
  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <div className="mx-auto my-4 max-w-7xl max-h-screen  px-2 md:my-6 md:px-0 ">
      <h2 className="text-4xl font-bold text-center text-blue-800">
        Order Details
      </h2>

      <div className="mt-8 flex flex-col overflow-hidden rounded-lg border-2 border-gray-300 md:flex-row ">
        <div className="w-full border-r border-gray-300 bg-gray-100 md:max-w-xs">
          <div className="p-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-1 gap-3 ">
              {orderProducts && orderProducts.length > 0 ? (
                <>
                  {/* <div className="text-sm font-semibold">Order ID</div> */}

                  <button
                    onClick={handleBackButton}
                    type="button"
                    className="rounded-md sticky bg-black px-8 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black flex justify-center items-center gap-2 text-center"
                  >
                    <div>
                      <svg
                        className="w-4"
                        fill="#f5f4f4"
                        viewBox="0 0 200 200"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <title></title>
                          <path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z"></path>
                        </g>
                      </svg>
                    </div>
                    <div>Back</div>
                  </button>

                  <div className="text-sm md:text-lg font-medium text-gray-700 font-bold text-blue-700">
                    {orderId}
                  </div>
                  {/* <span className="text-sm font-semibold">Order Date</span> */}
                  <span className="text-sm font-medium md:text-lg text-blue-700">
                    <span className=" font-bold text-gray-800  ">
                      Order Date:
                    </span>{" "}
                    {order.rentalStartDate}
                  </span>
                  <span className="text-sm font-medium md:text-lg text-blue-700">
                    <p className=" font-bold text-gray-800  ">
                      Delivery Address :
                    </p>{" "}
                    {order.deliveryAddress}
                  </span>
                  <span className="text-sm font-semibold md:text-lg text-blue-700">
                    <span className="text-gray-800 font-bold">
                      Total Amount:
                    </span>{" "}
                    ₹{order.rent}
                  </span>
                  <span className="text-sm font-semibold md:text-lg text-blue-700">
                    <span className=" font-bold text-gray-800">
                      Number of Items:
                    </span>{" "}
                    2
                  </span>
                  <span className="text-sm font-semibold md:text-lg text-blue-700">
                    <span className=" font-bold text-gray-800">
                      {" "}
                      Refundable Deposit:
                    </span>{" "}
                    1200
                  </span>
                  <span className="text-sm font-semibold md:text-lg text-blue-700">
                    <span className=" font-bold text-gray-800">
                      {" "}
                      Rental Date:
                    </span>{" "}
                    {order.rentalStartDate}
                  </span>
                  <span className="text-sm font-semibold md:text-lg text-blue-700">
                    <span className=" font-bold text-gray-800">
                      {" "}
                      Rental End Date:
                    </span>{" "}
                    {order.rentalEndDate}
                  </span>
                  <button
                    onClick={handleOpenStage}
                    className="border-2 shadow-md"
                  >
                    <p className="text-center text-lg mt-2 subpixel-antialiased font-bold">
                      Track Order
                    </p>
                    <Stepper
                      steps={[
                        {
                          stepLabel: "Order Recieved",
                          stepDescription: "This is Step 1",
                          completed: true,
                        },
                        {
                          stepLabel: `${orderStage}`,

                          completed: true,
                        },
                      ]}
                      currentStepIndex={1}
                    />
                  </button>
                  {selectedStage && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg">
                      <OrderStage
                        orderStage={order.orderStage}
                        onClose={handleCloseStage}
                      />
                    </div>
                  )}

                  {/* <div className="border-2 shadow-md mt-2">
                    <Stepper
                      steps={[
                        {
                          stepLabel: "Order Recieved",
                          stepDescription: "This is Step 1",
                          completed: true,
                        },
                        {
                          stepLabel: "Refund Processed",
                          completed: true,
                        },
                      ]}
                      currentStepIndex={1}
                    />
                  </div> */}
                </>
              ) : (
                <div>No order found with ID: {orderId}</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 md:max-h-[700px] md:overflow-scroll">
          <div className="md:p-8 px-2 ">
            <ul className="-my-7 divide-y divide-gray-800 ">
              {orderProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between space-x-5 py-7 md:flex-row flex-col  "
                >
                  <div className="flex flex-1 items-stretch md:flex-row flex-col">
                    <div className="flex-shrink-0">
                      <img
                        className="h-[10rem] w-30 rounded-lg  border-gray-200 object-contain "
                        src={product.productImg}
                        alt={product.productName}
                      />
                    </div>

                    <div className="ml-5 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-lg font-bold text-gray-900">
                          {product.productName}
                        </p>
                        <p className="mt-1.5 text-lg font-medium text-gray-500">
                          Size: {product.size}
                        </p>
                      </div>

                      <p className="mt-4 text-lg font-medium text-gray-500">
                        Quantity: {product.quantity}
                      </p>
                      <p className=" text-lg font-bold text-gray-900">
                        Rent: ₹{product.rent}
                      </p>
                    </div>
                  </div>

                  {/* <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="text-right text-lg font-bold text-gray-900">
                      Rent: ₹{product.rent}
                    </p>
                  </div> */}
                </li>
              ))}
            </ul>
            <hr className="my-8 border-t border-t-gray-200" />
            <div className="space-x-4">
              {/* <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Order
              </button> */}

              <div className="mt-2">
                {/* <OrderStage orderStage={ordersData} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
