import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './slices/projectsSlice'
import searchReducer from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    search: searchReducer
  }
})
