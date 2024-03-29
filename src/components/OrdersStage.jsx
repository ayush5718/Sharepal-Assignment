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
    <div
      onClick={onClose}
      className="fixed  inset-0 bg-gray-600 bg-opacity-50 h-full w-full"
    >
      <div className="flex items-center justify-center min-h-screen p-4  ">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="mx-auto max-w-md rounded-3xl bg-white shadow-lg overflow-hidden"
        >
          {/* Close Button */}

          <div className="px-4 md:px-8 relative    max-h-[500px] overflow-y-auto w-[450px] max-w-full ">
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
