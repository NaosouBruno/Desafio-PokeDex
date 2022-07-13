/* REDUX PARA O MENU BURGUER */

import { createSlice } from "@reduxjs/toolkit";

const uiBurger = createSlice({
  name: "ui",
  initialState: { burguerIsVisible: false },
  reducers: {
    toggle(state) {
      state.burguerIsVisible = !state.burguerIsVisible;
    },
  },
});

export const burguerAction = uiBurger.actions;

export default uiBurger;
