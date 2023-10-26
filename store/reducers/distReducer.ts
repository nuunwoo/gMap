import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  distReducer: "F",
};
const distReducer = createSlice({
  name: "distReducer",
  initialState,
  reducers: {
    distRedux(state: any, action) {
      state.distReducer = action.payload;
    },
  },
});
export default distReducer.reducer;
export const { distRedux } = distReducer.actions;
