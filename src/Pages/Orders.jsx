import React from "react";
import OrderHeader from "../UserComponents/OrderComponents/OrderHeader";
import SingleOrder from "../UserComponents/OrderComponents/SingleOrder";

export default function Orders(props) {
  return (
    <>
      <OrderHeader />
      <div className="flex flex-wrap gap-3 px-3 py-3">
        <SingleOrder />
        <SingleOrder />
        <SingleOrder />
      </div>
    </>
  );
}
