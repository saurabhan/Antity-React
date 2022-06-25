import { createContext, useContext, useState, useEffect } from "react";
import { commerce } from "../utils/commerce";
import { useCart } from "./CartContext";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = useCart();

  const fetchProducts = async () => {
    if (products.length === 0) {
      const { data } = await commerce.products.list();
      setFilteredProducts(data);
    } else {
      setFilteredProducts(products);
    }
  };
  const sortRating = (rating) => {
    const ratingFilter = products.filter(
      (p) => p.attributes[0].value[0].value === rating
    );
    if (ratingFilter.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(ratingFilter);
    }
  };

  const sortProducts = async (order, cat = "all") => {
    const { data } = await commerce.products.list({
      sortBy: "price",
      sortDirection: order,
      category_slug: cat,
    });
    setFilteredProducts(data);
  };

  const sortByPrice = async (order) => {

    const priceFilter = products.filter((p) => p?.price.raw <= order);

        setFilteredProducts(priceFilter);
  };

  const sortCat =  (cat = []) => {

    const catFilter =   products.filter((p) => cat.includes(p.categories[0].slug))
    if(catFilter.length ===0){
      setFilteredProducts(products)
    }else{
      setFilteredProducts(catFilter)
    }
  };
  

  useEffect(() => {
    fetchProducts();

  }, []);

  return (
    <FilterContext.Provider
      value={{
        filteredProducts,
        sortByPrice,
        sortProducts,
        sortCat,
        sortRating,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
