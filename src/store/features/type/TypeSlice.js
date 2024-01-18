import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 0,
};

const typeSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = typeSlice.actions;
export const selectActiveTab = (state) => state.tabs.activeTab;
export default typeSlice.reducer;
