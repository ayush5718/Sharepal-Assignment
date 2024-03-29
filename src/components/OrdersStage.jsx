// src/components/OrderStage.js
import Stepper from "@keyvaluesystems/react-stepper";
import React from "react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
// import Stepper from "react-stepper";

// import "../assets/stage.css";

const OrderStage = ({ orderStage, onClose }) => {
  // const [height, setHeight] = useState(0);
  // const [orientation, setOrientation] = useState("vertical");
  const OrderStageSteps = [
    "order_received",
    "kyc_received",
    "order_confirmed",
    "order_packed",
    "order_delivered",
    "pickup_due",
    "pickup_scheduled",
    "quality_checked",
    "payment_received",
    "order_dispatched",
    "out_for_delivery",
    "order_returned",
    "refund_processed",
  ];
  const steps = OrderStageSteps.map((stage, index) => ({
    stepLabel: stage.replace(/_/g, " "),
    stepDescription: `This is ${stage.replace(/_/g, " ")}`,
    completed: index < OrderStageSteps.indexOf(orderStage), // Check if the index is less than the current order stage's index
  }));

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-md md:mt-12 rounded-3xl bg-white shadow-lg">
          {/* Close Button */}

          <div className="px-4 py-6 sm:px-8 sm:py-10 relative max-h-[500px] overflow-scroll w-[350px]">
            <button
              onClick={onClose}
              className="sticky top-0 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Stepper */}
            <Stepper
              steps={steps}
              currentStepIndex={OrderStageSteps.indexOf(orderStage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStage;
