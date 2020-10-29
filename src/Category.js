import React from 'react'
import { Link, Route } from "react-router-dom";

const Category = () => {

    const arr = ["Shoes", "Boots", "Footwear"]

    return (
        <div>
            <ul>
                {arr.map(el => <li><Link to={`/category/${el.toLowerCase()}`} >{el}</Link></li>)}
            </ul>
            <Route path="/category/:title" render={(props) => props.match.params.title} />
        </div>
    )
}

export default Category