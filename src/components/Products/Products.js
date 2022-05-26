import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Card from '../Card/Card'

function Products({categroy, filters, sort}) {
    const [porducts, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    //GET ALL DATA
    useEffect(()=>{
        const getData = async()=>{
            try{
                const res = await axios.get(categroy ? `http://localhost:5000/api/product?catygory=${categroy}` : "http://localhost:5000/api/product");
                setProducts(res.data);
                
            }catch(error){
                console.log(error)
            }
        }
        getData();
        
    },[categroy])

    //FILTER DATA
    useEffect(()=>{
        categroy && setFilterProducts(
                porducts.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
                )
            )
        );
      
    },[filters, porducts, categroy]);

    //SORTING PRICE
    useEffect(()=>{
        if (sort === "newest") {
            setFilterProducts((prev) =>
              [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
          } else if (sort === "asc") {
            setFilterProducts((prev) =>
              [...prev].sort((a, b) => a.price - b.price)
            );
          } else {
            setFilterProducts((prev) =>
              [...prev].sort((a, b) => b.price - a.price)
            );
          }
    },[sort])

    console.log(categroy);
    console.log(filters, sort);
    console.log(filterProducts);

  return (
    <>
        {
          porducts ? (<Row style= {{gap: "20px 0px", marginTop:"30px"}}>
          
              {
                  categroy ? 
                   filterProducts ? filterProducts.map(item=> <Card {...item} key={item.title}/>) : <h3>There are no product</h3>
                    : porducts.slice(0,3).map(item=> <Card {...item} key ={item.title}/>) 
              }
          </Row>) : <h3>Loding....</h3> 
        }
      </>
  )
}

export default Products