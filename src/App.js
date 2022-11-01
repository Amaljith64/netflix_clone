import React from "react"
import axios from "axios"
import {actions,originals} from './urls'
import NavBar from "./Components/NavBar/NavBar"
import './App.css'
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={actions} title='Action' isSmall />

    </div>
  )
}

export default App