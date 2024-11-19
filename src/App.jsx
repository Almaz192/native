import { ProductCard } from "./components/ProductCard";
import { useEffect, useState } from "react";


function App() {
  const [loading,setLoading]=useState([true]) 
  const [products,setProducts]=useState([]) 

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .finally(()=> setLoading(false)) 
  },[])

  return (
    <div>
    {loading && <div>loading..</div>}
    {
    products.map((product) => (<ProductCard data={product}/>))
}
    </div>
  );
}

export default App;
