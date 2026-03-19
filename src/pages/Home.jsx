import React, { useState } from 'react'

const Home = () => {
    const [search, setSearch] = useState("");
    return (
        <div>
            <h1>Welcome to BingeList </h1>
            <input
                type="text"
                placeholder="Search movies or series"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <p>Searching for:{search} </p>
        </div>
    )
}

export default Home;