import React from 'react'

export default function Input({ search, setSearch, weatherHandler }) {
    return (
        <div className="mb-3 mt-5 mb-5 text-center  ">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='w-50 p-2 rounded' placeholder="Enter City Name" />
            <button className='ms-4 border-0 bg-secondary fw-600 px-3 py-1 text-white rounded' onClick={weatherHandler}>Check</button>
        </div>
    )
}
