import React from "react";
const buttonClassName =
  "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg w-full min-w-36 text-sm md:px-4 py-2.5 text-center ";

const buttonClassName2 =
  "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm w-full min-w-36 md:px-5 py-2.5 text-center ";
export const getStatusColor = (status) => {
  switch (status) {
    case "order_received":
      return "bg-green-50"; // Green for order received
    case "kyc_received":
      return "bg-yellow-50"; // Yellow for KYC received
    case "order_confirmed":
      return "bg-blue-50"; // Blue for order confirmed
    case "order_packed":
      return "bg-indigo-50"; // Indigo for order packed
    case "order_delivered":
      return "bg-purple-50"; // Purple for order delivered
    case "pickup_due":
      return "bg-pink-50"; // Pink for pickup due
    case "pickup_scheduled":
      return "bg-red-50"; // Red for pickup scheduled
    case "quality_checked":
      return "bg-orange-50"; // Orange for quality checked
    case "payment_received":
      return "bg-yellow-300"; // Light yellow for payment received
    case "order_dispatched":
      return "bg-green-300"; // Light green for order dispatched
    case "out_for_delivery":
      return "bg-blue-300"; // Light blue for out for delivery
    case "order_returned":
      return "bg-red-300"; // Light red for order returned
    case "refund_processed":
      return "bg-gray-300"; // Light gray for refund processed
    default:
      return "bg-gray-100"; // Default color
  }
};

const OrderCard = ({
  order,
  handleOpenPopup,
  handleCartPage,
  handleOpenTicketModal,
  index,
}) => {
  return (
    <div
      key={order?.orderId}
      className=" p-0 flex flex-col rounded-3xl overflow-hidden border min-w border-slate-200 hover:shadow-sm duration-200   transition-all bg-white relative"
    >
      <div className="text-left mb-4 flex justify-between absolute right-0 top-0 z-10">
        <div className="left-header">
          <button className={"rounded-b-lg bg-blue-600 px-3 py-2 text-white"}>
            Order #{index + 1}
          </button>
        </div>
        <div className="right-header"></div>
      </div>

      {/* left side start  */}
      <div className="flex justify-between flex-1 items-start flex-col md:flex-row md:p-4 p-3">
        <div className="left-section flex items-center justify-center gap-2 ">
          {/* left side */}
          <div className=" flex items-start justify-center h-full w-full gap-4 flex-col md:flex-row">
            <div
              onClick={() => handleOpenPopup(order?.orderId)}
              className="grid grid-cols-2 gap-2 w-full  max-w-40 h-full relative p-3 bg-slate-200 rounded-3xl cursor-pointer "
            >
              {order?.products.slice(0, 4).map((product, index) => (
                <img
                  key={index}
                  src={product.productImg}
                  alt={product.productName}
                  className="w-full h-full max-h-16 object-contain min-h-16 min-w-16 bg-slate-100 rounded-2xl"
                />
              ))}
              {order?.products.length > 4 && (
                // <div className="absolute  bottom-0 right-0 left-0 top-0 w-full h-max bg-black bg-opacity-50 p-2 rounded-full text-white">
                <div className="absolute flex items-center justify-center inset-0 w-10 h-10 rounded-full mx-auto my-auto bg-slate-300 font-bold">
                  +{order?.products?.length - 4}
                </div>
              )}
            </div>

            <div className="text-xl">
              <h3 className="font-extrabold text2xl md:text-xl">
                {order?.orderId}
              </h3>

              <dl className="mt-0.5 leading-4 text-[10px] text-gray-600">
                <div className="text-sm">
                  <dt className="inline">Order Date: </dt>
                  <dd className="inline"> {order?.orderDate}</dd>
                </div>

                <div className="text-sm">
                  <dt className="inline">Order Status: </dt>
                  <dd
                    className={`inline-flex items-center rounded-md ${getStatusColor(
                      order?.orderStage
                    )} px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                  >
                    {order?.orderStage}
                  </dd>
                </div>

                <div className="text-sm">
                  <dt className="inline">Rental Start Date: </dt>
                  <dd className="inline">{order?.rentalStartDate}</dd>
                </div>
                <div className="text-sm">
                  <dt className="inline">Rental End Date: </dt>
                  <dd className="inline">{order?.rentalEndDate}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* left side  end */}

      {/* <hr className="border-t-2 border-slate-100" /> */}
      {/* bottm  */}
      <div className="p-3 md:p-4 relative border-t-2 border-slate-100">
        <div className="flex justify-start items-center gap-3">
          <div>
            <button
              className={buttonClassName}
              onClick={() => handleCartPage(order?.orderId)}
            >
              View Order Details
            </button>
          </div>
          <div>
            <button
              onClick={() => handleOpenTicketModal(order)}
              className={buttonClassName2}
            >
              Report Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
