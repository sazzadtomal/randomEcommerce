import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"Cart",
    initialState:{visible:false},
    reducers:{
        setCartVisible: (state,action)=>{
            state.visible=!state.visible
        }
    }
})


export const {setCartVisible}=cartSlice.actions

export default cartSlice.reducer