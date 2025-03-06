import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: userData = {
  userName: "",
  accessToken: "",
  refreshToken: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state: userData,
      action: PayloadAction<Omit<userData, "isAuth">>
    ) => {
      state.isAuth = true;
      state.userName = action.payload.userName;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    resetUser: (state: userData) => {
      state.isAuth = false;
      state.userName = "";
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

// Export actions
export const {setUser, resetUser} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
