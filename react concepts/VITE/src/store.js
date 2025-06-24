import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,  // Corrected here
  reducers: {
    updateMobile: (state, action) => {
      state.mobile = action.payload;  // Direct mutation, no return
    },
    updateFullName: (state, action) => {
      state.fullName = action.payload;
    },
    withdraw: (state, action) => {
      state.balance = state.balance - action.payload;  // Update balance only
    },
    deposit: (state, action) => {
      state.balance = state.balance + action.payload;
    },
    reset:(state)=>{return state}
  },
});
console.log(userSlice)
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const { updateMobile, updateFullName, withdraw, deposit } = userSlice.actions;
export default store;
