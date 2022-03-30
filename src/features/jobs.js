import { createSlice } from "@reduxjs/toolkit";
import { jobs } from "../api/jobsdata";

export const userSlice = createSlice({
  name: "jobs",
  initialState: { value: jobs },
  reducers: {
    addJob: (state, action) => {
      state.value.push(action.payload);
    },
  
    filterJobs: (state, action) => {
        state.value = state.value.filter((job) => job.id !== action.payload.id);
      },
  },
});

export const { addJob, filterJobs, /*updateUsername*/ } = userSlice.actions;
export default userSlice.reducer;