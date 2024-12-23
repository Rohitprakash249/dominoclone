import React from "react";
import DeliveryTypeTimeStatus from "./SingleOrderComponents/DeliveryTypeTimeStatus";
import ItemsOrdered from "./SingleOrderComponents/ItemsOrdered";
import OrderTotalAndReorderButton from "./SingleOrderComponents/OrderTotalAndReorder Button";
import { Link, useNavigate } from "react-router-dom";

export default function SingleOrder(props) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate("/order/:1578")}
        className="rounded-md w-full shadow-lg sm:w-[48%] lg:w-[32%]  border"
      >
        <DeliveryTypeTimeStatus />
        <ItemsOrdered />
        <OrderTotalAndReorderButton />
      </div>
    </>
  );
}
