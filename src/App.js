//App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home"
import styles from "./css/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Navbar">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Login className="login"/>} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
