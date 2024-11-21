import "./index.css"
export function ProductCard(props){
    const{image,category,title,price}=props.data;
    
    return <div className="product-card">
        <div className="header">
            <img className="image" width="200" src={image} alt={title} />
            <div className="category">{category}</div>
            <h4 className="title">{title}</h4>
        </div>
        <div className="footer">
            <div className="price">${price}</div>
            <button className="btn">Add to card</button>
        </div>
    </div>
}