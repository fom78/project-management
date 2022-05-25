import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './slices/projectsSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer
  }
})
