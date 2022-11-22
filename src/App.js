/* Importing React Router Dom */
import { Routes, Route } from "react-router-dom";

/* Importing Components */
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

/* Importing Pages */
import HomePage from "./pages/HomePage";
import AboutStyled from "./pages/AboutStyled";
import AboutToastify from "./pages/AboutToastify";
import FakeLogin from "./pages/FakeLogin";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styled" element={<AboutStyled />} />
        <Route path="/toasty" element={<AboutToastify />} />
        <Route path="/login" element={<FakeLogin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
