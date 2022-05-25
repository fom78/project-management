import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchText: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload
    }
  }
})

export const { setSearchText } = searchSlice.actions

export default searchSlice.reducer
