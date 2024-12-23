import React from "react";

export default function OrderTotalAndReorderButton(props) {
  return (
    <>
      <div className="flex justify-between px-3 py-3 items-center">
        <p>₹543</p>
        <button className="bg-[#e31837] text-white font-semibold py-2 px-5 rounded-md">
          Reorder
        </button>
      </div>
    </>
  );
}
