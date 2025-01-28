import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Filter } from "../../components/Filter";
import "./index.css";

export function ProductContainer() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
                setFilteredProducts(json); // Set initial products
            })
            .finally(() => setLoading(false));
    }, []);

    const filterProducts = (category) => {
        if (category === "All") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter((product) => product.category === category)
            );
        }
    };

    return (
        <div className="container">
            <Filter onFilter={filterProducts} />
            {loading ? (
                <div className="spinner">Loading...</div>
            ) : (
                <div className="allCards">
                    {filteredProducts.map((product) => (
                        <ProductCard data={product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
