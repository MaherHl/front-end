 import usersReducer from "../features/users"
import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs"
import companiesReducer from "../features/companies";

  const store = configureStore({
  reducer: {
     users: usersReducer,
     jobs:jobsReducer,
     companies:companiesReducer,
  },
});
export default store