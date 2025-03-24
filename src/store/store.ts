import { configureStore } from "@reduxjs/toolkit";

// Import your reducers here
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import localStorageMiddleware from "./middleware";
import { preloadedState } from "./preLoader";
import mobileNavbarReducer from "./slices/mobileNavbarSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
    user: userReducer,
    mobileNavbar: mobileNavbarReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
