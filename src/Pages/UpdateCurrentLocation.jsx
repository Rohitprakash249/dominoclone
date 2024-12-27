import React, { useState } from "react";
import UpdateLocationMap from "../UserComponents/UpdateCurrentLocation/UpdateLocationMap";

export default function UpdateCurrentLocation(props) {
  const [mapPosition, SetMapPosition] = useState([28.4595, 75.0266]);
  const [updatingLocation, setUpdatingLocation] = useState(false);
  function setCurrentLocation() {
    setUpdatingLocation(true);

    setTimeout(function () {
      setUpdatingLocation(false);
    }, 1000);
  }
  return (
    <>
      <div className="h-svh w-[100%] ">
        <UpdateLocationMap
          mapPosition={mapPosition}
          toSetMapPosition={SetMapPosition}
        />
        <div className="w-full py-6 px-6">
          <button
            onClick={setCurrentLocation}
            className={`px-4 rounded-md py-2 w-full duration-1000 text-white font-semibold ${
              updatingLocation === true ? `bg-[#005491]` : `bg-[#e12a47]`
            } `}
          >
            {updatingLocation === true
              ? "Updating Location"
              : "Update Location"}
          </button>
        </div>
      </div>
    </>
  );
}
