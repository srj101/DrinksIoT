import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    register: (state, action) => {
      state.user = action.payload.user;
    },
  },
});
export const { logout, register } = usersSlice.actions;

export default usersSlice.reducer;
