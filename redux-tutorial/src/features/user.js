import {createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name:"user",
    initialState:{value:{name:"Prudhvi",age:0,email:"Prudhvi@gmail.com"}},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        }
    }
})

export default userSlice.reducer