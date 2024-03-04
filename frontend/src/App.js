import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login.js/Login";
import NavBox from "./components/Home/NavBox";
import Footer from "./components/Home/Footer";
import Register from "./components/Login.js/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBox />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login/:type" element={<Login />} />
          <Route exact path="/register/:type" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
