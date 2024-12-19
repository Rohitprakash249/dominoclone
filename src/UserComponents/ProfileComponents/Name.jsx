import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
export default function Name(props) {
  return (
    <>
      <div className="flex bg-[#cde6f6] py-4 px-2 mx-[2px] flex justify-between">
        <div className="flex gap-2 px-2">
          <p className="text-white rounded-full bg-[#0066a7] px-2">R</p>
          <p className="text-[#333333]">Rohit Prakash</p>
        </div>
        <div className="text-[#6f7c85] mx-2">
          <BorderColorIcon fontSize="small" />
        </div>
      </div>
    </>
  );
}
