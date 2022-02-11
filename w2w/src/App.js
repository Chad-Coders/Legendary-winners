import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './webpages';
import Entertainment from './webpages/entertainment';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/entertainment' exact element={<Entertainment />} />
      </Routes>
    </Router>
  );
}

export default App;