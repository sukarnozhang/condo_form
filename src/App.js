//App.js
import { Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
