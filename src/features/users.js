import { createSlice } from "@reduxjs/toolkit";
import axios  from "axios"
import React, { useState } from 'react';




   let uss = fetch("http://127.0.0.1:3030/user")


// ? create slice user  
export const userSlice = createSlice({
  name: "users",
  initialState: { value : uss },
  reducers: {
    Register: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    //    login   
    loginUser:(state,action)=>{
      state.user = action.payload;
    },
    logout:(state,action)=>{
      state.user = null;
    }

    // updateUsername: (state, action) => {
    //   state.value.map((user) => {
    //     if (user.id === action.payload.id) {
    //       user.username = action.payload.username;
    //     }
    //   });
    // },

  },
});

export const { addUser, deleteUser, loginUser , logout, /*updateUsername*/ } = userSlice.actions;
export default userSlice.reducer;