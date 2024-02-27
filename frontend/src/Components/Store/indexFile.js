import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Auth-Slice";

const store = configureStore({
  reducer: {
    authRdx: AuthReducer,
  }
});

export default store;