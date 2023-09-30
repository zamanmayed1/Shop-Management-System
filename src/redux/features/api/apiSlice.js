import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// Handle Products Api's Here
export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://api.npoint.io",
    }),
    endpoints: (builder) =>  ({
        getProducts : builder.query({
            query : () => "/8ee79be4963f272aa04d"
        })
    })
})
// Handle Category Api's Here
export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://api.npoint.io",
    }),
    endpoints: (builder) =>  ({
        getCategory : builder.query({
            query : () => "/6a1401b2360dc393c8df"
        })
    })
})
// Handle Customers Api's Here
export const customersApi = createApi({
    reducerPath: "customersApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://api.npoint.io",
    }),
    endpoints: (builder) =>  ({
        getCustomers : builder.query({
            query : () => "/a449b9882e53c0bf0a32"
        })
    })
})

// Handle Company Api's Here
export const companyApi = createApi({
    reducerPath: "companyApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://api.npoint.io",
    }),
    endpoints: (builder) =>  ({
        getCompany : builder.query({
            query : () => "/34806c66b4cb7087d92b"
        })
    })
})




export const { useGetProductsQuery } = productsApi;
export const { useGetCategoryQuery } = categoryApi;
export const { useGetCustomersQuery } = customersApi;
export const { useGetCompanyQuery } = companyApi;