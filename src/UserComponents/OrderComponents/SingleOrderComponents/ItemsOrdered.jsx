import React from "react";

export default function ItemsOrdered(props) {
  return (
    <>
      <div className="px-4 py-3 flex border-y-[1px] justify-between items-center">
        <div className="flex gap-2 items-center">
          <img className="h-[13px]" src="/vegsymbol.png"></img>
          <p className="text-sm text-[#2e2e2e]">Mexican Green Wave</p>
        </div>
        <p>1</p>
      </div>
    </>
  );
}
