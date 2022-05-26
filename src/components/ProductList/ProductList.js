import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavigationBar from '../NavigationBar/NavigationBar'
import Products from '../Products/Products'
import classes from "./ProductList.module.css"

function ProductList() {
    const {categroy} = useParams();
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newset");

    const handlerFilter = (e) =>{
        const value = e.target.value;
        setFilters({...filters, [e.target.name]: value})
    }

    console.log(filters)
  return (
    <>
        <NavigationBar/>
        <Container>
            <h3 className={classes.title}>{categroy}</h3>
            <div className={classes.filterContainer}>
                <div className={classes.filter}>
                    <h4>Filter product</h4>
                    <select onChange={handlerFilter} name="color">
                        <option disabled>Color</option>
                        <option>white</option>
                        <option>green</option>
                        <option>black</option>
                        <option>blue</option>
                    </select>
                    <select onChange={handlerFilter} name="size">
                        <option disabled>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
                <div className={classes.filter}>
                    <h4>Sort Product</h4>
                    <select onChange={(e)=> setSort(e.target.value)}>
                        <option disabled>Sort</option>
                        <option value="newset">Newset</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <div>
                <Products filters={filters} sort={sort} categroy={categroy}/>
            </div>
        </Container>
        <Footer/>
    </>
  )
}

export default ProductList