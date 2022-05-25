import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: []
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = [...action.payload]
    },
    addProject: (state, action) => {
      state.projects = [...state.projects, action.payload]
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        project => project.id !== action.payload
      )
    },
    editProject: (state, action) => {
      state.projects = state.projects.map(project => {
        if (project.id.toString() === action.payload.id.toString()) {
          return action.payload
        }
        return project
      })
    }
  }
})

export const { addProject, deleteProject, setProjects, editProject } = projectsSlice.actions

export default projectsSlice.reducer
