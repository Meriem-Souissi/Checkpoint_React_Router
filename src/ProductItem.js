import React from 'react'

const ProductItem = ({ id, products }) => {
    let tab = products.filter(item => item.id == id)[0];
    return (
        <>
            <h3>{tab.title}</h3>
            <p>{tab.desc}</p>
            <hr />
            <h3>{tab.status}</h3>
        </>
    )
}

export default ProductItem