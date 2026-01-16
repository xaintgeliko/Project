//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Site from './layouts/Site';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';

function App() {
  return<BrowserRouter>
    <Routes>
      <Route path ="/" element={<Site />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  </BrowserRouter>
  /*(
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
  */
}

export default App;
