import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import NavBox from "./components/NavBox.js";
import Body from "./components/Body.js";
function App() {
  const styles = {
    header: {
      height: "100vh",
      width: "100vw",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
  };
  return (
    <div className="App" style={styles.body}>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBox />
                <Body />
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
