import React from "react";
import SingleCoupon from "./SingleCoupon";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CouponSection(props) {
  const data = [
    {
      couponCode: "PIZZA30",
      discount: 30,
      description: "Up to ₹30 Off on orders of ₹200 or more",
    },
    {
      couponCode: "PARTY40",
      discount: 40,
      description: "Up to ₹40 Off on orders of ₹200 or more",
    },
    {
      couponCode: "PARTY60",
      discount: 60,
      description: "Up to ₹60 Off on orders of ₹200 or more",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function applyCoupon(couponData) {
    dispatch({ type: "cart/applyCoupon", payload: couponData });
    navigate("/cart");
  }
  return (
    <>
      <div className=" bg-[#eeeef1] px-3 py-3 flex gap-3 flex-wrap">
        {data.map((item) => (
          <SingleCoupon
            key={item.couponCode}
            couponInfo={item}
            toApplyCoupon={applyCoupon}
          />
        ))}
      </div>
    </>
  );
}
