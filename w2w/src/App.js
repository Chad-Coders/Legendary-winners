import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSource from "./api/MovieSource";
import './App.css';
import BoxList from "./components/box/boxList";
import SearchBar from "./components/search/SearchBar";
//import Navbar from './components/navbar/navIndex';
import Entertainment from './entertainment';



function App() {

  document.body.style = 'background: #1C3738';

  const [state, setState] = useState({
    results: []
  });
  const onSearch = async (text) => {
    const results = await MovieSource.get("/entertainment");

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (

    <div className="App">
      <div className="container searchApp">
        <a id='h2' href="../">
          W2W
        </a>
        <Router>
          <SearchBar onSearch={onSearch} />

          <Routes>
            <Route path='/entertainment' exact element={<Entertainment />} />
          </Routes>

        </Router>
        <BoxList results={state.results} />
      </div>
    </div>
  );
}

export default App;