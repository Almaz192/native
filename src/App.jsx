import { ProductCard } from "./components/ProductCard";


const products=[
  {
    id:0,
    name :"Product 1",
    category : "Category 1" ,
    price : 200,
    img: "https://samsungstore.kg/files/media/14/14630.png"
  },
  {
    id:1,
    name :"Product 2",
    category : "Category 2" ,
    price : 400,
    img: "https://samsungstore.kg/files/media/14/14630.png"
  },
]




function App() {
  return (
    <div>{
    products.map((product) => (<ProductCard data={product}/>))
  }
    </div>
  );
}

export default App;
