import React, { useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import { useDispatch, useSelector } from "react-redux";

export default function SaveAddressAsButton({
  setTypeAddress,
  typeAddress,

  address,
  flatOrBuilding,
  mapPosition,
}) {
  const [clicked, setClicked] = useState();
  const [editOther, setEditOther] = useState(false);
  const [other, setOther] = useState("location name");
  const [ifAddressSaved, setAddressSaved] = useState(false);
  const dispatch = useDispatch();
  const addressData = useSelector((store) => store.customer.addresses);
  // console.log(addressData);
  function setWhichButtonIsClicked(item) {
    setClicked(item);
  }

  function blabla() {
    if (!mapPosition || !address) return;
    if (!flatOrBuilding) return;
    const data = {
      location: mapPosition,
      addressInfo: address,
      flatNo: flatOrBuilding,
      addressType: typeAddress,
    };
    const newData = [...addressData, data];

    dispatch({ type: "customer/updateAddress", payload: newData });
    setAddressSaved(true);
    console.log(addressData);

    setTimeout(function () {
      setAddressSaved(false);
    }, 1000);
  }
  return (
    <>
      <div>
        <p className="text-[#7a7a7a] mb-1">Save this address as</p>
        <div className="flex text-[0.8rem] gap-1">
          <p
            onClick={() => setTypeAddress("Home")}
            className={`border  px-2 py-[0.4rem] rounded-md ${
              typeAddress === "Home"
                ? `border-[#005491] text-[#155491] bg-[#ecf7ff]`
                : `border-[#dddddd] text-[#2e2e2e]`
            }`}
          >
            Home
          </p>
          <p
            onClick={() => setTypeAddress("Office")}
            className={`border  px-2 py-[0.4rem] rounded-md ${
              typeAddress === "Office"
                ? `border-[#005491] text-[#155491] bg-[#ecf7ff]`
                : `border-[#dddddd] text-[#2e2e2e]`
            }`}
          >
            Office
          </p>
          <p
            onClick={() => setTypeAddress("Other")}
            className={`border flex gap-2  px-2 py-[0.4rem] rounded-md ${
              typeAddress === "Other"
                ? `border-[#005491] text-[#155491] bg-[#ecf7ff]`
                : `border-[#dddddd] text-[#2e2e2e]`
            }`}
          >
            Other
            <p className="">
              <ModeIcon fontSize="small" />
            </p>
          </p>
        </div>
      </div>
      <button
        onClick={blabla}
        className={`text-white duration-1000 w-full py-[0.4rem] text-md font-bold mb-2 rounded-md ${
          ifAddressSaved === true ? `bg-[#005491]` : `bg-[#a6a6a6] `
        }`}
        // className="text-white w-full bg-[#a6a6a6] py-[0.4rem] text-md font-bold mb-2 rounded-md"
      >
        {ifAddressSaved === true ? "Address Saved Successfuly" : "Save Address"}
      </button>
    </>
  );
}
// import React, { useState } from "react";
// import ModeIcon from "@mui/icons-material/Mode";
// export default function SaveAddressAsButton(props) {
//   const [clicked, setClicked] = useState();
//   function setWhichButtonIsClicked(item) {
//     setClicked(item);
//   }
//   return (
//     <>
//       <div>
//         <p className="text-[#7a7a7a] mb-1">Save this address as</p>
//         <div className="flex text-[0.8rem] gap-1">
//           <p
//             onClick={() => setWhichButtonIsClicked("Home")}
//             className="border border-[#dddddd] text-[#2e2e2e] px-2 py-[0.4rem] rounded-md"
//           >
//             Home
//           </p>
//           <p
//             onClick={() => setWhichButtonIsClicked("Office")}
//             className="border border-[#dddddd] text-[#2e2e2e] px-2 py-[0.4rem] rounded-md"
//           >
//             Office
//           </p>
//           <p
//             onClick={() => setWhichButtonIsClicked("Other")}
//             className="border border-[#dddddd] flex gap-2 text-[#2e2e2e] px-2 py-[0.4rem] rounded-md"
//           >
//             Other
//             <ModeIcon fontSize="small" />
//           </p>
//         </div>
//       </div>
//       <button className="text-white w-full bg-[#a6a6a6] py-[0.4rem] text-md font-bold mb-2 rounded-md">
//         Save Address
//       </button>
//     </>
//   );
// }
