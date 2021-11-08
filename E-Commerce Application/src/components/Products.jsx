import axios from 'axios';
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data/data';
import Product from './Product'
const Container = styled.div`padding:20px;display:flex;flex-wrap:wrap;justify-content:space-between;`;

const Products = ({cat,filters,sort}) => {
    const [products,setProducts]= useState([]);
    const [filtredProducts,setFiltredProducts] = useState([]);

    useEffect(() => {
       const getProducts = async ()=>{
        try{
            const res  = await axios.get(cat?`http://localhost:5000/api/products?category=${cat}`
                                             :`http://localhost:5000/api/products?category`);
            setProducts(res.data);
               
            }
            catch(err)
            {
                console.log(err);
            }}
                getProducts();       
                },[cat])


    useEffect(()=>{

        cat  && 
        setFiltredProducts(
            products.filter((item)=>
            Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
            )
            )
            );

    },[products,cat,filters])

    useEffect(()=>{
        
        if((sort && sort.sort==="newest"))
        {
              setFiltredProducts((prev)=>[...prev].sort((a,b)=> a.createdAt-b.createdAt));  
        }else if ((sort && sort.sort==="asc"))
        {
            setFiltredProducts((prev)=>[...prev].sort((a,b)=> a.price-b.price));  
        }
        else{
            setFiltredProducts((prev)=>[...prev].sort((a,b)=> b.price-b.price));  
        }

    },[sort])

    return (
        <Container>
            {cat ? filtredProducts.slice(0,8).map(item=>(

                     <Product item={item} key={item._id}/>

            ) ) : products.slice(0,8).map(item=>(

                <Product item={item} key={item._id}/>

       ) ) }
        </Container>
    )
}

export default Products
