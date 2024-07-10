import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true;
      //console.log("user detail", action.payload)
    },
    logout(state) {
      state.userDetails = null;
      state.isLoggedIn = false;
    },
  },
})

export const { setUserDetails,logout } = userSlice.actions

export default userSlice.reducer