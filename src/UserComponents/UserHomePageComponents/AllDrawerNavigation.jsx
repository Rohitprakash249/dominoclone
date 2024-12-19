import React from "react";
import DrawerNavigation from "../../UiComponents/DrawerNavigation";

const data = [
  { name: "Deals & Offers", to: "/deals" },
  // { name: "1 + 1 Offer", to: "/dealsAndOffers" },
  // { name: "Track Current Order", to: "/trackOrder" },
  // { name: "Order History", to: "/orderHistory" },
  // { name: "Terms & Conditions", to: "/termsAndCondtions" },
  // { name: "Bulk Order", to: "/bulkOrder" },
  // { name: "Nutritional Information", to: "/nutritionalInfo" },
];

export default function AllDrawerNavigation(props) {
  function createIndividualNavigation(singleData) {
    return (
      <DrawerNavigation
        key={singleData.name}
        toNavigate={singleData.to}
        nameOfNaviation={singleData.name}
      />
    );
  }
  return (
    <>
      {data.map(createIndividualNavigation)}
      {/* <DrawerNavigation toNavigate="/blablasasa" nameOfNaviation="deals" /> */}
    </>
  );
}
