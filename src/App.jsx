import React, { useState } from 'react'
import Input from './components/Input'
import Display from './components/Display'

export default function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState("");
  const APIKey = '9e1ac06a6f72dc48dc80d70b4f040583';

  async function weatherHandler() {
    // if (!search) return;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(search)}&units=metric&appid=${APIKey}`);
    const data = await response.json();
    setWeather(data)
  }




  return (
    <>
      <h1 className='text-center mt-5 text-decoration-underline'>Weather Check</h1>
      <div className='w-50 shadow border mx-auto m-5 myclass rounded'>
        <Input search={search} setSearch={setSearch} weatherHandler={weatherHandler} />
        <Display weather={weather} />
      </div>
    </>
  )
}
