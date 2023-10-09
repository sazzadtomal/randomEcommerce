import { configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebarSlice";
import { baseApi } from "./api";
import NavbarSlice from "../features/navbarSilce"
import cartSlice from "../features/cartSlice";


export const store=configureStore({

    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        sidebar:sidebarSlice,
        navbar:NavbarSlice,
        cart:cartSlice


     },

     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
})


