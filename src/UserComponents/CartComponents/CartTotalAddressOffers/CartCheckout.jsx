import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CartCheckout(props) {
  const [subTotal, setSubTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const cartData = useSelector((store) => store.cartData.cart);
  const couponData = useSelector((store) => store.cartData.coupon);
  useEffect(
    function () {
      let subTotal = cartData.reduce((sum, obj) => sum + obj.totalValue, 0);
      const calculateTax = (subTotal * 18) / 100;
      setSubTotal(subTotal);
      if (couponData === "noCouponApplied") {
        setTaxes(calculateTax);
        setGrandTotal(subTotal + calculateTax);
        setDiscount(0);
      } else {
        setTaxes(calculateTax);
        setGrandTotal(subTotal + calculateTax - couponData.discount);
        setDiscount(couponData.discount);
      }

      console.log(subTotal);
    },
    [cartData, couponData]
  );

  return (
    <>
      <div>
        <p className="text-sm ml-2 font-semibold md:text-[1rem] md:my-5 my-3">
          Check out
        </p>
        <div className="bg-white shadow-md flex px-4 flex-col font-semibold  py-4  rounded-sm">
          <div>
            {/* total price total coupon applied ecctra will go here  */}
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p>₹ {subTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              {discount === 0 ? (
                "-"
              ) : (
                <p className="text-[#8abf45]">₹ {discount}</p>
              )}
            </div>
            <div className="flex justify-between">
              <p>Taxes and Charges</p>
              <p>{taxes}</p>
            </div>
            <div className="flex justify-between border-y-[1px] my-2 py-2 border-dashed">
              <p>Grand Total</p>
              <p>₹ {grandTotal}</p>
            </div>
          </div>

          <button className="uppercase md:font-bold text-white bg-[#82bb37] text-md font-semibold px-1 rounded-sm py-1 md:py-[5px]">
            place order
          </button>
        </div>
      </div>
    </>
  );
}
