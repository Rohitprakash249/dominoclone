import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
export default function CartAddress(props) {
  return (
    <>
      <div>
        <p className="text-sm ml-2  font-semibold md:text-[1rem] md:my-5 my-3">
          Choose a delivery address
        </p>
        <div className="bg-white shadow-md flex justify-between items-center pl-2 pr-4 py-4  rounded-sm">
          <div className="flex items-start justify-center ">
            <div className="px-3 flex pb-3">
              <PlaceIcon />
            </div>
            <div>
              <p className="text-[0.70rem] font-semibold">CURRENT ADDRESS</p>
              <p className="text-[#b3b3b3] text-[0.70rem]">GURGAON</p>
            </div>
          </div>
          <button className="uppercase md:font-bold text-white bg-[#65ab0b] text-sm font-semibold px-1 md:px-5 rounded-sm md:py-[5px]">
            Change
          </button>
        </div>
      </div>
    </>
  );
}
