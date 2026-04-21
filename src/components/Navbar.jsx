import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#111", color: "white", display: "flex", gap: "20px", alignItems: "center" }}>
            <h2>BingeList</h2>

            <Link to="/" style={{ color: "white" }}>
                Home
            </Link>

            <Link to="/favorites" style={{ color: "white" }}>
                Favorites
            </Link>
        </nav>
    )
}

export default Navbar