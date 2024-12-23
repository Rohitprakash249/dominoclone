import React from "react";
import ProfileNavbar from "../UserComponents/ProfileComponents/ProfileNavbar";
import Name from "../UserComponents/ProfileComponents/Name";
import ProfileLink from "../UserComponents/ProfileComponents/ProfileLink";

export default function Profile(props) {
  return (
    <>
      <ProfileNavbar />
      <div className="flex flex-col items-center md:pt-[50px] h-svh">
        <div className="w-full md:w-[30%]">
          <div className=" mx-2 my-3 shadow-md">
            <Name />
            <ProfileLink
              imageLink="/profile/phone.png"
              nameOflink={"1251422522"}
            />
            <ProfileLink
              imageLink="/profile/mail.png"
              nameOflink={"hellodev@gmail.com"}
            />
          </div>
          <div className=" mx-2 my-3 shadow-md">
            <ProfileLink
              imageLink="/profile/wallet.png"
              nameOflink={"Domino's Wallet"}
            />
            <ProfileLink
              imageLink="/profile/orders.png"
              nameOflink={"My Orders"}
            />
            <ProfileLink
              to="/address"
              imageLink="/profile/location.png"
              nameOflink={"My Addresses"}
            />
            <ProfileLink
              imageLink="/profile/logout.png"
              nameOflink={"Logout"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
