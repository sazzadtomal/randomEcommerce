import { configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebarSlice";
import { baseApi } from "./api";
import NavbarSlice from "../features/navbarSilce"


export const store=configureStore({

    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        sidebar:sidebarSlice,
        navbar:NavbarSlice

     },

     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
})


