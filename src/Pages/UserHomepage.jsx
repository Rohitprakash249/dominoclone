import React from "react";
import DeliveryTakeawayDinein from "../UserComponents/UserHomePageComponents/HomePageSections/DeliveryTakeawayDinein";
import Offers from "../UserComponents/UserHomePageComponents/HomePageSections/Offers";
import Cravings from "../UserComponents/UserHomePageComponents/HomePageSections/Cravings";
import WhatsNew from "../UserComponents/UserHomePageComponents/HomePageSections/WhatsNew";
import SectionBestSellers from "../UserComponents/UserHomePageComponents/HomePageSections/SectionBestSellers";
import UserNavbar from "../UserComponents/UserHomePageComponents/HomePageSections/UserNavbar";
import UserFooter from "../UserComponents/UserHomePageComponents/HomePageSections/UserFooter";
import PizzaSections from "../UserComponents/UserHomePageComponents/HomePageSections/PizzaSections";

export default function UserHomepage(props) {
  return (
    <>
      <UserNavbar />
      <DeliveryTakeawayDinein />
      <Offers />
      <Cravings />
      <WhatsNew />
      <div className="h-2 bg-[#f1f1f1] mt-5"></div>

      <PizzaSections />

      <UserFooter />
    </>
  );
}
