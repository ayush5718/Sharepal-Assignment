// // import { Trash } from "lucide-react";

// import { useEffect, useState } from "react";
// import ordersData from "../data/OrdersData";
// import { useParams, useNavigate } from "react-router-dom";
// import CardPopup from "./CardPopup";
// import { Cart } from "../pages/Cart";
// // import { Tooltip } from "react-tooltip";
// import RaiseTicket from "./RaiseTicket";
// import OrderStage from "./OrdersStage";

// export const MyOrders = () => {
//   // Calculate total price

//   const navigate = useNavigate();
//   const customerOrders = ordersData.filter(
//     (order) => order.customerName === "Sourabh"
//   );

//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showRaiseTicket, setshowRaiseTicket] = useState(null);

//   // both handleopenPopup AND handleClosePopup to handle the raise ticket modal
//   const handleOpenPopup = (orderId) => {
//     const order = customerOrders.find((order) => order.orderId === orderId);
//     setSelectedOrder(order);
//   };

//   const handleClosePopup = () => {
//     setSelectedOrder(null);
//   };

//   // Navigate to the Cart page with orderId as a URL parameter
//   const handleCartPage = (orderId) => {
//     navigate(`/cart/${orderId}`);
//   };

//   // both function to handle the raise ticket modal
//   const handleOpenTicketModal = (orderId) => {
//     setshowRaiseTicket(orderId);
//   };
//   const handleCloseTicketModal = () => {
//     setshowRaiseTicket(null);
//   };
//   return (
//     <div className="mx-auto max-w-9xl px-2 lg:px-0">
//       <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl ">
//         <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//           My Orders
//         </h1>
//         {/* <!-- Iterate over each order --> */}
//         {customerOrders.map((order, index) => (
//           <div
//             key={order.orderId}
//             className="my-8 p-0  rounded-lg shadow-2xl border-3 hover:scale-[1.01] transition-all bg-white"
//           >
//             <div className="text-left mb-4 flex justify-between">
//               <div className="left-header">
//                 <button
//                   className="rounded-b-lg bg-blue-800 px-4 py-3 text-white  "
//                   onClick={() => handleOpenPopup(order.orderId)}
//                 >
//                   Order #{index + 1}
//                 </button>
//               </div>
//               <div className="right-header"></div>
//             </div>
//             <div className="flex justify-between flex-col md:flex-row px-4">
//               <div className="left-section">
//                 <p className="text-xl">{order.orderId}</p>
//                 <p>
//                   <span className="font-semibold">Order Date:</span>{" "}
//                   {order.orderDate}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Order Status:</span>{" "}
//                   {order.orderStage}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Rental Start Date: </span>{" "}
//                   {order.rentalStartDate}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Rental End Date: </span>{" "}
//                   {order.rentalEndDate}
//                 </p>
//               </div>

//               <div className="right-section flex items-center justify-center relative">
//                 <div className="grid grid-cols-2  gap-2">
//                   {order.products.slice(0, 4).map((product, index) => (
//                     <img
//                       key={index}
//                       src={product.productImg}
//                       alt={product.productName}
//                       className="w-32 h-32 object-cover"
//                     />
//                   ))}
//                   {order.products.length > 4 && (
//                     <div className="absolute  bottom-0 right-0 bg-black bg-opacity-50 p-2 rounded-full text-white">
//                       +{order.products.length - 4} more
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/* bottom section */}
//             <hr className="border-t-2" />
//             <div className="divide-x divide-gray-800"></div>

//             <div className="p-8 relative">
//               <div className="flex justify-between md:flex-row flex-col">
//                 <div className="left-section gap-4"></div>
//                 <div className="mid-section"></div>
//                 <div className="right-section"></div>
//               </div>

//               <div className="flex justify-between  ">
//                 <div>
//                   <button
//                     className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-800 dark:focus:ring-blue-800 "
//                     onClick={() => handleCartPage(order.orderId)}
//                     e
//                   >
//                     View Order Details
//                   </button>
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => handleOpenTicketModal(order)}
//                     className=" rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                   >
//                     Report Issue
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Render Raise Ticket PopUp as a Modal */}
//       {showRaiseTicket && (
//         <div
//           className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg"
//           onClick={handleCloseTicketModal}
//         >
//           <RaiseTicket
//             orderId={showRaiseTicket}
//             onClose={handleCloseTicketModal}
//           />
//         </div>
//       )}

//       {/* Render CardPopup as a modal */}
//       {selectedOrder && (
//         <div
//           className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg"
//           onClick={handleClosePopup}
//         >
//           <CardPopup order={selectedOrder} onClose={handleClosePopup} />
//         </div>
//       )}
//       {/* <Sidebar /> */}
//     </div>
//   );
// };
import { useEffect, useState } from "react";
import ordersData from "../data/OrdersData";
import { useParams, useNavigate } from "react-router-dom";
import CardPopup from "./CardPopup";
import { Cart } from "../pages/Cart";
import RaiseTicket from "./RaiseTicket";
import OrderStage from "./OrdersStage";

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
    <div className="mx-auto max-w-9xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-4 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          My Orders
        </h1>
        {customerOrders.map((order, index) => (
          <div
            key={order.orderId}
            className="my-4 p-0 rounded-lg shadow-2xl border-3 hover:scale-[1.01] transition-all bg-white"
          >
            <div className="text-left mb-4 flex justify-between">
              <div className="left-header">
                <button
                  className="rounded-b-lg bg-blue-800 px-4 py-3 text-white"
                  onClick={() => handleOpenPopup(order.orderId)}
                >
                  Order #{index + 1}
                </button>
              </div>
              <div className="right-header"></div>
            </div>
            <div className="flex justify-between flex-col md:flex-row px-4">
              <div className="left-section">
                <p className="text-xl">{order.orderId}</p>
                <p>
                  <span className="font-semibold">Order Date:</span>{" "}
                  {order.orderDate}
                </p>
                <p>
                  <span className="font-semibold">Order Status:</span>{" "}
                  {order.orderStage}
                </p>
                <p>
                  <span className="font-semibold">Rental Start Date: </span>{" "}
                  {order.rentalStartDate}
                </p>
                <p>
                  <span className="font-semibold">Rental End Date: </span>{" "}
                  {order.rentalEndDate}
                </p>
              </div>

              <div className="right-section flex items-center justify-center relative">
                <div className="grid grid-cols-2 gap-2">
                  {order.products.slice(0, 4).map((product, index) => (
                    <img
                      key={index}
                      src={product.productImg}
                      alt={product.productName}
                      className="w-24 h-24 object-cover"
                    />
                  ))}
                  {order.products.length > 4 && (
                    <div className="absolute  bottom-0 right-0 bg-black bg-opacity-50 p-2 rounded-full text-white">
                      +{order.products.length - 4} more
                    </div>
                  )}
                </div>
              </div>
            </div>
            <hr className="border-t-2" />
            <div className="divide-x divide-gray-800"></div>
            <div className="p-4 relative">
              <div className="flex justify-between md:flex-row flex-col">
                <div className="left-section gap-4"></div>
                <div className="mid-section"></div>
                <div className="right-section"></div>
              </div>

              <div className="flex justify-between">
                <div>
                  <button
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                    onClick={() => handleCartPage(order.orderId)}
                  >
                    View Order Details
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleOpenTicketModal(order)}
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Report Issue
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
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
