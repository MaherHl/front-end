import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "companies",
  initialState: { value: [] },



  
  reducers: {
    addCompany: (state, action) => {
      state.value.push(action.payload);
    },

    filterCompany: (state, action) => {
      state.value = state.value.filter((company) => company.id !== action.payload.id);
    },

    
  },
});

export const { addCompany, filterCompany, /*updateUsername*/ } = userSlice.actions;
export default userSlice.reducer;