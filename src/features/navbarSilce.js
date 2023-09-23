import { createSlice } from "@reduxjs/toolkit";



const navbarSlice=createSlice({
    name:"navSlice",
    initialState:{dropSearch:false},
    reducers:{
        setDropSearch:(state,action)=>{
           state.dropSearch=!state.dropSearch
        }    
    }
})


export const {setDropSearch}=navbarSlice.actions

export const getDropSearch=state=>state.navbar.dropSearch

export default navbarSlice.reducer