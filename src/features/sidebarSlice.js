import { createSlice } from "@reduxjs/toolkit";



const sidebarSlice=createSlice({
    name:"sidebar",
    initialState:{visible: false},
    reducers:{
        setVisible:(state,action)=>{
            state.visible=!state.visible
        }
    }
})


export const {setVisible}=sidebarSlice.actions

export default sidebarSlice.reducer

