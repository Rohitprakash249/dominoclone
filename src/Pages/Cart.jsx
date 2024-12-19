import React from "react";
import CartNavbar from "../UserComponents/CartComponents/CartNavbar";
import CartContent from "../UserComponents/CartComponents/CartContent";

export default function Cart(props) {
  return (
    <>
      <div className="bg-[#f2f2f2] w-full">
        <CartNavbar />

        <CartContent />
      </div>
    </>
  );
}
