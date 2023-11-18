import { Routes, Route, HashRouter } from "react-router-dom"
import './App.css';
import SiteHeader from './Components/SiteHeader/SiteHeader';
import Home from "./Pages/Home";
import Calc from "./Pages/Calc";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/calc" element={<Calc/>} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </HashRouter>
      <br />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
