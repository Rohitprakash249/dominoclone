import React from "react";
import SkipButton from "../UserComponents/SignUpComponents/SkipButton";
import LogoAndOffers from "../UserComponents/SignUpComponents/LogoAndOffers";
import { TextField } from "@mui/material";
import InputField from "../UserComponents/SignUpComponents/InputField";

export default function SignUp(props) {
  return (
    <>
      <div className="bg-[#eeeef1] h-svh  flex flex-col justify-center items-center ">
        <div className="bg-white rounded-md md:w-[24%] w-[95%] my-2 md:my-4 md:px-[50px] md:py-8 flex flex-col ">
          {/* <SkipButton /> */}
          <LogoAndOffers />
          <div className="md:py-10 py-3 flex flex-col justify-center items-center gap-5">
            <InputField type="email" />
            <InputField type="password" />
            <InputField type="contact no." />
            <button className="bg-[#0078ae] uppercase font-semibold text-white px-4 py-4 rounded-md md:w-[80%]">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
