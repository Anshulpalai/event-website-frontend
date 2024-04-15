import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecommendedShow from './components/RecommendedShow'
import UpcomingShows from './components/UpcomingShows'

function App() {


  return (
    <>
    <Header />
    <RecommendedShow />
    <UpcomingShows />
    </>
  )
}

export default App
