// Importing the necessary dependencies
import { configureStore } from "@reduxjs/toolkit";

// Importing the contactMeSlice reducer
import contactMeSlice from "@/store/contactMe-slice";

// Configuring the Redux store
const store = configureStore({
  reducer: {
    contactMe: contactMeSlice.reducer, // Adding the contactMeSlice reducer under the 'contactMe' key
  },
});

// Exporting the Redux store
export default store;
