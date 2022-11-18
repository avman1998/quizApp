import React from "react";
import Intro from "./components/intro/Intro";

import Quizcategory from "./components/QuizCategory/QuizCategory";
import {AuthProvider} from './AuthContext';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
function App() {
  return (
    <AuthProvider>
    <Router>
    <div className="App">
    <Routes>
     <Route path="/" element={<Intro/>}/>
     <Route path="quizcategory" element={<Quizcategory/>}/>
     </Routes>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
