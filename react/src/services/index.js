import { configureStore } from "@reduxjs/toolkit";

import uiBurger from "./ui-burguer";

const store = configureStore({
  reducer: {
    ui: uiBurger.reducer,
  },
});

export default store;
