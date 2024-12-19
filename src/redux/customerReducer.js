const customerInitialState = {
  name: "Rohit",
  contactNo: "123456789",
  email: "Rohit@Rohit.com",

  addresses: [],
  lastSelectedLocation: {
    addressFirstLine: "",
    addressSecondLine: "",
    latitude: "",
    longitude: "",
  },
};

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/updateName":
      return { ...state, name: action.payload };
    case "customer/updateEmail":
      return { ...state, email: action.payload };
    case "customer/updateAddress":
      return { ...state, addresses: action.payload };
    default:
      return state;
  }
}
