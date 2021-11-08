import
    {
        getProductsStart, getProductsSucceed, getProductsFailure,
        deleteProductStart, deleteProductSucceed, deleteProductsFailure,
        updateProductStart, updateProductSucceed, updateProductsFailure,
        AddProductStart,AddProductSucceed,AddProductsFailure
    } from './productRedux'
import {publicRequest, userRequest} from './../requestMethode'

export const getProducts = async ( dispatch,  )=>
{
    dispatch( getProductsStart() );
   
    try
    {
        const res = await publicRequest.get( "/products" );
        dispatch( getProductsSucceed(res.data) );
    }
    catch(err) {
        dispatch( getProductsFailure() );
    }
}
export const deleteProduct = async ( dispatch,id  )=>
{
    dispatch( deleteProductStart() );
   
    try
    {
        const res = await userRequest.delete( `/products/${id}` );
        dispatch( deleteProductSucceed(id) );
    }
    catch(err) {
        dispatch( deleteProductsFailure() );
    }
}
export const UpdateProduct = async ( dispatch,id,product  )=>
{
    dispatch( updateProductStart() );
   
    try
    {
        const res = await userRequest.put( `/products/${id}`,{product} );
        dispatch( updateProductSucceed(id,product) );
    }
    catch(err) {
        dispatch( updateProductsFailure() );
    }
}
export const AddProduct = async ( dispatch,product  )=>
{
    dispatch( AddProductStart() );
   
    try
    {
        const res = await userRequest.post( `/products`,product);
        dispatch( AddProductSucceed(res.data) );
    }
    catch(err) {
        dispatch( AddProductsFailure() );
    }
}