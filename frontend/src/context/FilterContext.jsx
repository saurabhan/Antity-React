import { createContext, useContext, useState, useEffect } from "react";
import { commerce } from "../utils/commerce";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children})=>{

    const [ filteredProducts, setFilteredProducts]= useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setFilteredProducts(data);
    }

    const sortProducts = async (order, cat = 'all') => {
        const { data } =  await commerce.products.list({
            sortBy: 'price',
            sortDirection: order,
            category_slug: cat
        })
        setFilteredProducts(data)
    }

    const sortCat = async (cat = []) =>{
        const { data }= await commerce.products.list({
            category_slug: [cat]
        })
        setFilteredProducts(data)
    }

    useEffect(() => {
        fetchProducts();
      }, []);

    return (
    <FilterContext.Provider
    value={{
        filteredProducts,
        sortProducts,
        sortCat
    }}>
        {children}
    </FilterContext.Provider>
    )
}

export { useFilter, FilterProvider }