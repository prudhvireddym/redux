import {createSlice} from '@reduxjs/toolkit'
const initialStateValue = "black"

export const themeSlicer = createSlice({
    name:"setTheme",
    initialState:{value:initialStateValue},
    reducers:{
        themeColorReducer:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {themeColorReducer} = themeSlicer.actions

export default themeSlicer.reducer