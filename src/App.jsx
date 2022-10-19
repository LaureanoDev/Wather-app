import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { useEffect, useRef } from 'react'

function App() {

  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  )
}

export default App
