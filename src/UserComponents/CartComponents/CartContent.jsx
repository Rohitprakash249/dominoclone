import React from "react";

import CartItems from "./CartItems";

import CartTotalCouponetc from "./CartTotalCouponetc";

export default function CartContent(props) {
  return (
    <>
      <div className="flex md:px-[70px] md:justify-between ">
        <div className="w-full mx-2 md:mx-4 flex py-7 flex-col md:flex-row md:gap-[50px] lg:gap-[100px]">
          <CartItems />
          <CartTotalCouponetc />
        </div>
      </div>
    </>
  );
}
