import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice( {
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error:false,
    },
    reducers: {
        //Get ALL
        getProductsStart: ( state ) =>
        {
            state.isFetching = true;
            state.error = false;
        
        },
        getProductsSucceed: ( state, action ) =>
        {
            state.isFetching = false;
            state.error = false;
            state.products = action.payload;
        },
        getProductsFailure: ( state ) =>
        {
            state.isFetching = false;
            state.error = true;
        },
        //Delete Product
        deleteProductStart: ( state ) =>
        {
            state.isFetching = true;
            state.error = false;
        
        },
        deleteProductSucceed: ( state, action ) =>
        {
            state.isFetching = false;
            state.error = false;
            state.products.splice(
                state.products.findIndex(item=>item._id===action.payload),1
            );
        },
        deleteProductsFailure: ( state ) =>
        {
            state.isFetching = false;
            state.error = true;
        },
        //Update Product
        updateProductStart: ( state ) =>
        {
            state.isFetching = true;
            state.error = false;
        
        },
        updateProductSucceed: ( state, action ) =>
        {
            state.isFetching = false;
            state.error = false;
            state.products[state.products.findIndex( item => item._id === action.payload )] = action.payload;
        },
        updateProductsFailure: ( state ) =>
        {
            state.isFetching = false;
            state.error = true;
        },
        //Add Product
        AddProductStart: ( state ) =>
        {
            state.isFetching = true;
            state.error = false;
        
        },
        AddProductSucceed: ( state, action ) =>
        {
            state.isFetching = false;
            state.error = false;
            state.products.push(action.payload);
        },
        AddProductsFailure: ( state ) =>
        {
            state.isFetching = false;
            state.error = true;
        }

    }
} )

export const {
    getProductsStart,
    getProductsSucceed,
    getProductsFailure,
    deleteProductStart,
    deleteProductSucceed,
    deleteProductsFailure,
    updateProductStart,
    updateProductSucceed,
    updateProductsFailure,
    AddProductStart,
    AddProductSucceed,
    AddProductsFailure
} = productSlice.actions;

export default productSlice.reducer;