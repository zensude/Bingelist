import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-fuchsia-700 via-pink-600 to-rose-500">


            <h2 className="text-3xl font-extrabold text-white tracking-wide">



            </h2>

            <div className="flex gap-6">

                <Link to="/" className="px-4 py-2 rounded-full text-white font-medium transition duration-300 hover:bg-white/20">

                    Home

                </Link>

                <Link to="/favorites" className="px-4 py-2 rounded-full text-white font-medium transition duration-300 hover:bg-white/20">

                    Favorites

                </Link>

            </div>
        </nav>
    )
}

export default Navbar