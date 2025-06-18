import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  token: '',
  isLoggedIn: false,
  _id: '',
  firstName: '',
  lastName: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: () => initialState,
    addLoginDetails: (state, action) => {
      return {
        ...state,
        email: action.payload.user?.email || '',
        token: action.payload?.token || '',
        isLoggedIn: action.payload?.isLoggedIn || false,
        _id: action.payload.user?._id || '',
        firstName: action.payload.user?.firstName || '',
        lastName: action.payload.user?.lastName || ''
      }
    },
  },
})

export const { logoutUser, addLoginDetails } = userSlice.actions
export default userSlice.reducer
