import React from 'react'
import { Link, Route } from "react-router-dom"
import ProductItem from "./ProductItem"

const Products = () => {
    const products = [
        {
            title: "NIKE Liteforce Blue Sneakers",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
            status: "Available",
            id: 1,
        },
        {
            title: "U.S. POLO ASSN. Slippers",
            desc: "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
            status: "Available",
            id: 2,
        },
        {
            title: "ADIDAS Adispree Running Shoes",
            desc: "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
            status: "Available",
            id: 3,
        },
        {
            title: "Lee Cooper Mid Sneakers",
            desc: "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
            status: "Out of Stock",
            id: 4,
        },
    ]
    return (
        <div style={{ display: "flex", alignItems: "center" }} >
            <div style={{
                margin: "50px 20px",
                padding: "10px 20px",
                backgroundColor: "#C0C0C0",
                borderRadius: 10,
                width: 300
            }} >
                <h3>Products</h3>
                {products.map(product => <p><Link to={`/products/${product.id}`} >{product.title}</Link></p>)}
            </div>
            <div style={{ width: 600, marginLeft: 60 }} >
                <Route path="/Products/:id" render={(props) => <ProductItem id={props.match.params.id} products={products} />} />
            </div>
        </div>

    )
}

export default Products
