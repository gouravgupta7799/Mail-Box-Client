import { createSlice } from "@reduxjs/toolkit";


const intitalToken = localStorage.getItem('idToken');

const AuthState = {
  idToken: intitalToken,
  isLoggedIn: !!intitalToken,
};

const AuthSlice = createSlice({
  name: 'userAuth',
  initialState: AuthState,
  reducers: {

    loginHandler(state, action) {
      state.idToken = action.payload.idToken;
      localStorage.setItem('idToken', action.payload.idToken);
      state.isLoggedIn = true;
    },

    logoutHandler(state) {
      state.idToken = null;
      localStorage.removeItem('idToken');
      state.isLoggedIn = false;
    }
  }
})

export const AuthAction = AuthSlice.actions;

export default AuthSlice.reducer;
