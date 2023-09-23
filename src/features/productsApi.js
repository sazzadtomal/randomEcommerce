import { baseApi } from "../app/api";



export const productApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=>"products"
        })
    })
})


export const {useGetProductsQuery}=productApi