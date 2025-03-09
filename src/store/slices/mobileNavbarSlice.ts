import {
  MOBILE_NAVBAR_SELECT,
  mobileNavbarSelect,
} from "@/src/types/navbarTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: mobileNavbarSelect = {
  selected: MOBILE_NAVBAR_SELECT.HOME,
};

export const mobileNavbarSlice = createSlice({
  name: "mobileNavbarSlice",
  initialState,
  reducers: {
    changeSelect: (
      state: mobileNavbarSelect,
      action: PayloadAction<MOBILE_NAVBAR_SELECT>
    ) => {
      state.selected = action.payload;
    },
  },
});

// Export actions
export const { changeSelect } = mobileNavbarSlice.actions;

// Export reducer
export default mobileNavbarSlice.reducer;
