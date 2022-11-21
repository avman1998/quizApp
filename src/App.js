import React from "react";
import Intro from "./components/intro/Intro";
import AboutUs from "./components/AboutUs/AboutUs";
import Science from "./Questions/Science/Science";
import Sports from "./Questions/Sports/Sports";
import Quizcategory from "./components/QuizCategory/QuizCategory";
import Bollywood from "./Questions/Bollywood/Bollywood";
import Protected from "./components/Protected/Protected";
import History from "./components/History/History";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="about" element={<AboutUs />} />
            <Route
              path="quizcategory"
              element={
                <Protected>
                  <Quizcategory />
                </Protected>
              }
            />
            <Route path="science" element={<Science />} />
            <Route path="sports" element={<Sports />} />
            <Route path="bollywood" element={<Bollywood />} />
            <Route path="history" element={<History />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
