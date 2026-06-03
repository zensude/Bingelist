import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 p-4 shadow-md flex justify-between items-center">


            <h2 className="text-2xl font-bold text-rose-600">

                BingeList

            </h2>

            <div className="flex gap-6">

                <Link to="/" className="text-white font-medium hover:text-rose-500">

                    Home

                </Link>

                <Link to="/favorites" className="text-white font-medium hover:text-rose-500">

                    Favorites

                </Link>

            </div>
        </nav>
    )
}

export default Navbar