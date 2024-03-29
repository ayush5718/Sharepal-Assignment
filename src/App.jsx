// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserOrders from "./pages/UserOrders";
import { MyOrders } from "./components/MyOrders";
import { Cart } from "./pages/Cart";
import OrderStage from "./components/OrdersStage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserOrders />} />
        <Route path="/:orderID" element={<MyOrders />} />
        <Route path="/cart/:orderId?" element={<Cart />} />
        <Route path="/orderstage" element={<OrderStage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
