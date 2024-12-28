import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Address from "../../../Pages/Address";

export default function CartCheckout(props) {
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const cartData = useSelector((store) => store.cartData.cart);
  const couponData = useSelector((store) => store.cartData.coupon);
  const cartInfo = useSelector((store) => store.cartData);
  const nameOfUser = useSelector((store) => store.customer.name);
  const contactNo = useSelector((store) => store.customer.contactNo);
  const currentAddress = useSelector((store) => store.customer.selectedAddress);
  console.log(contactNo);
  // console.log(cartInfo);

  async function placeOrder() {
    const items = cartInfo.cart;
    const coupon = couponData.couponCode;
    let couponApplied = coupon;
    // const coupon = couponData.couponCode
    const customerName = nameOfUser;

    if (!currentAddress) {
      navigate("/address");
    }
    if (!coupon) {
      couponApplied = "no Coupon Applied";
    }
    if (coupon) {
      couponApplied = coupon;
    }

    const finalData = {
      customerName: customerName,
      contactNo: contactNo,
      customerAddress: currentAddress,
      itemsOrder: items,
      couponApplied: couponApplied,
      subTotal: subTotal,
      grandTotal: grandTotal,
    };

    if (currentAddress) {
      console.log(finalData);
      const res = await fetch("http://localhost:4000/api/createOrder", {
        method: "POST", // PUT method for updating resources
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData), // Send updated data as JSON
      });
      const data = await res.json();
      if (data.message === "success") {
        navigate("/orders");
      }
      console.log(data);
    }
  }

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

          <button
            onClick={placeOrder}
            className="uppercase md:font-bold text-white bg-[#82bb37] text-md font-semibold px-1 rounded-sm py-1 md:py-[5px]"
          >
            place order
          </button>
        </div>
      </div>
    </>
  );
}
