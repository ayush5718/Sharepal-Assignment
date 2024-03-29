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
    return (
      <div className="h-screen w-full items-center justify-center flex">
        Loading...
      </div>
    );
  }
  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <div className="mx-auto max-w-7xl lg:px-0 bg-white md:p-7 p-2 py-8">
      <div className="mx-auto  py-4 ">
        <h1 className="text-3xl w-full text-center font-bold tracking-tight text-slate-900 sm:text-4xl">
          Order Details
        </h1>

        <div className="mt-8 flex flex-col overflow-hidden rounded-lg border  border-slate-200 md:flex-row  gap-5">
          <div className="w-full border-r border-slate-200 bg-slate-50 md:max-w-sm">
            <div className="p-8 ">
              <div className="flex flex-col gap-3 ">
                {orderProducts && orderProducts.length > 0 ? (
                  <>
                    {/* <div className="text-sm font-semibold">Order ID</div> */}

                    <button
                      onClick={handleBackButton}
                      type="button"
                      className="rounded-md sticky bg-black px-8 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black flex justify-center items-center gap-2 text-start"
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

                    <h3 className="text-base text-center md:text-xl font-extrabold p-2 px-3 rounded-md bg-slate-200  ">
                      {orderId}
                    </h3>

                    <div
                      onClick={handleOpenStage}
                      className="border cursor-pointer border-slate-100 rounded-lg hover:shadow-md transition-all bg-white"
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
                    </div>
                    
                    {/* <span className="text-sm font-semibold">Order Date</span> */}
                    <span className="text-sm text-start md:text-base font-bold p-2 px-3 rounded-md bg-slate-200 ">
                      <span className=" font-bold text-slate-500  ">
                        Order Date:
                      </span>{" "}
                      {order.rentalStartDate}
                    </span>

                    <span className="text-sm text-start md:text-base font-bold p-2 px-3 rounded-md bg-slate-200 ">
                      <span className="text-slate-500 font-bold">
                        Total Amount:
                      </span>{" "}
                      ₹{order.rent}
                    </span>
                    <span className="text-sm text-start md:text-base font-bold p-2 px-3 rounded-md bg-slate-200 ">
                      <span className=" font-bold text-slate-500">
                        Number of Items:
                      </span>{" "}
                      2
                    </span>
                    <span className="text-sm text-start md:text-base font-bold p-2 px-3 rounded-md bg-slate-200 ">
                      <span className=" font-bold text-slate-500">
                        {" "}
                        Refundable Deposit:
                      </span>{" "}
                      1200
                    </span>
                    <span className="text-sm text-start md:text-base font-bold p-2 px-3 rounded-md bg-slate-200 ">
                      <span className=" font-bold text-slate-500">
                        {" "}
                        Rental Date:
                      </span>{" "}
                      {order.rentalStartDate}
                    </span>
                    <span className="text-sm text-start md:text-base font-bold p-2 px-3 rounded-md bg-slate-200 ">
                      <span className=" font-bold text-slate-500">
                        {" "}
                        Rental End Date:
                      </span>{" "}
                      {order.rentalEndDate}
                    </span>

                    <span className="text-sm text-start md:text-base font-bold p-2 px-3 rounded-md bg-slate-200 ">
                      <p className=" font-bold text-slate-500  ">
                        Delivery Address :
                      </p>{" "}
                      {order.deliveryAddress}
                    </span>

                    {/* <div
                      onClick={handleOpenStage}
                      className="border border-slate-100 rounded-lg shadow-md"
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
                    </div> */}
                    {selectedStage && (
                      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg">
                        <OrderStage
                          orderStage={order.orderStage}
                          onClose={handleCloseStage}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div>No order found with ID: {orderId}</div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="flex-1 md:max-h-[700px] md:overflow-scroll"> */}
          <div className="flex-1 ">
            <div className="md:p-8 px-2 ">
              <ul className="-my-7 p-0 divide-y divide-slate-200 ">
                {orderProducts.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between space-x-5 py-7 md:flex-row flex-col  "
                  >
                    {/* <div className="flex flex-1 items-stretch md:flex-row flex-col">
                      <div className="flex-shrink-0">
                        <img
                          className="h-[10rem] w-30 rounded-lg  border-slate-200 object-contain "
                          src={product.productImg}
                          alt={product.productName}
                        />
                      </div> */}

                    <div className="flex flex-1 items-center gap-4">
                      <div className="flex-shrink-0 h-36 p-2 w-36 rounded-lg border border-slate-200 flex items-center justify-center">
                        <img
                          className=" object-contain"
                          src={product.productImg}
                          alt={product.productName}
                        />
                      </div>

                      {/* aayush code  */}
                      {/* <div className="ml-5 flex flex-col justify-between leading-3">
                        <div className="flex-1">
                          <p className="text-lg font-bold text-slate-900">
                            {product.productName}
                          </p>
                          <p className="mt-1.5 text-lg font-medium text-slate-500">
                            Size: {product.size}
                          </p>
                        </div>

                        <p className="mt-4 text-lg font-medium text-slate-500">
                          Quantity: {product.quantity}
                        </p>
                        <p className=" text-lg font-bold text-slate-900">
                          Rent: ₹{product.rent}
                        </p>
                      </div> */}

                      <div className="text-xl">
                        <h3 className="font-extrabold text-lg md:text-2xl">
                          {product?.productName}
                        </h3>

                        <div className="text-base md:text-lg">
                          <dt className="inline text-slate-600">Rent: </dt>
                          <dd className="inline font-bold">
                            {" "}
                            &#8377;{product?.rent}
                          </dd>
                        </div>
                        <dl className="mt-0.5 leading-4 text-[10px] text-slate-600">
                          <div className="text-sm">
                            <dt className="inline">Size: </dt>
                            <dd className="inline"> {product?.size}</dd>
                          </div>

                          <div className="text-sm">
                            <dt className="inline">Quantity: </dt>
                            <dd className="inline">{product?.quantity}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    {/* <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="text-right text-lg font-bold text-slate-900">
                      Rent: ₹{product.rent}
                    </p>
                  </div> */}
                  </li>
                ))}
              </ul>
              <hr className="my-8 border-t border-t-slate-200" />
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
    </div>
  );
};
