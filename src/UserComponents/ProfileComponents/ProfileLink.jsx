import React from "react";

export default function ProfileLink({ imageLink, nameOflink }) {
  return (
    <>
      <div className="flex gap-8 items-center px-5 py-3">
        <img
          className="mix-blend-multiply h-[18px] w-[18px] "
          src={imageLink}
        ></img>
        <p className="text-[0.8rem]">{nameOflink}</p>
      </div>
    </>
  );
}
