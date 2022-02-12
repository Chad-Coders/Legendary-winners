import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoxList from "./components/BoxList";
import SearchBar from "./components/search/SearchBar";
import MovieSource from "./api/MovieSource";

//import Navbar from './components/navbar/navIndex';

import Entertainment from './entertainment';
import './App.css';

function App() {
  
  document.body.style = 'background: #1C3738'; 

  const [state, setState] = useState({
    results: []
  });
  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "821d565d" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (

    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          W2W
        </h2>
        <Router>

          <Routes>
            <Route path='/entertainment' exact element={<Entertainment />} />
          </Routes>

        </Router>
        <SearchBar onSearch={onSearch} />
        <BoxList results={state.results} />
      </div>
    </div>
  );
}

export default App;