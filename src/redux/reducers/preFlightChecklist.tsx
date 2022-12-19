import { createSlice } from '@reduxjs/toolkit'

export const preFlightChecklistSlice = createSlice({
  name: 'preFlightChecklist',
  initialState: {
    preFlightChecklist: [{title: 'Buy socks', id:100, done:false}],
  },
  reducers: {
    create: (state, action) => {
      state.preFlightChecklist =  [...state.preFlightChecklist, {title: action.payload.title, id:new Date().getTime()+Math.floor(Math.random()*100), done:false}]  
    },
    update: (state, action) => {
        state.preFlightChecklist = state.preFlightChecklist.map(item => item.id === action.payload.id ? {...item, title: action.payload.title, done: action.payload.done} : item)  
    },
    delete: (state, action) => {
        state.preFlightChecklist = state.preFlightChecklist.filter(item => item.id !== action.payload.id)  
    },
  },
})

// Action creators are generated for each case reducer function
export const { create, update} = preFlightChecklistSlice.actions

export default preFlightChecklistSlice.reducer

// {description:"hello", id:1}