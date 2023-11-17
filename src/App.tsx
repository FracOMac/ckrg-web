import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import SiteHeader from './Components/SiteHeader/SiteHeader';
import Home from "./Pages/Home";
import Calc from "./Pages/Calc";

function App() {
  return (
    <div className="App">
        <SiteHeader />
      <body>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/calc" element={<Calc/>} />
          </Routes>
        </BrowserRouter>
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
