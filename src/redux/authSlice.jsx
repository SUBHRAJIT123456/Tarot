
import { createSlice } from '@reduxjs/toolkit';
import db from '../data/db.json';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInUser: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = db.users.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        state.user = existingUser;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = 'Invalid email or password';
        state.isAuthenticated = false;
      }
    },
    signOutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { signInUser, signOutUser } = authSlice.actions;
export default authSlice.reducer;
