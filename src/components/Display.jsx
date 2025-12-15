import React from 'react'

export default function Display({ weather }) {
  if (!weather) return null;
  return (
    <div className='text-center text-light'>
      <div className='w-50  m-auto bg-transparent border shadow mb-4 border-secondary text-uppercase   p-3 rounded '>
        <h1>{weather.name} </h1>
        <p className='fw-bold'>{weather.main.temp} °C</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
        <p className='fw-bold text-dark text-uppercase'>{weather.weather[0].description}</p>
      </div>
    </div>

  )
}
