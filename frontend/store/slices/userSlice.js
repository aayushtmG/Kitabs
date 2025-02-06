// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: JSON.parse(localStorage.getItem('user')) || null,
//   isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
// };

const initialState = {
  user:
    typeof window !== 'undefined' && localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  isAuthenticated:
    typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') === 'true',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('isAuthenticated', 'true');
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
