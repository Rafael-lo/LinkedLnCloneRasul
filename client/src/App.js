import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
