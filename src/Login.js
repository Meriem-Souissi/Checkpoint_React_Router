import React, { useState } from 'react'
import { Redirect, Route } from "react-router-dom"

const Login = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div style={{ margin: "50px 10px" }} >
            <p>You must log in to view the page at /admin</p>
            <button onClick={() => setClicked(true)} >Log in</button>
            <Route render={(props) => clicked && <Redirect to={{ pathname: "/admin", state: { from: props.location } }} />} />
        </div>
    )
}

export default Login