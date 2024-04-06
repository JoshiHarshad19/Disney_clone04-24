import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Prodhouses from './Components/Prodhouses'
import GenreMoviesList from './Components/GenreMoviesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Header/>
        <Slider/>
        <Prodhouses/>
        <GenreMoviesList/>
      </div>

    </>
  )
}

export default App
