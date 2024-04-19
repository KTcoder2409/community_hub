import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing_page';
import SignPage from './pages/sign_page';
import LoginPage from './pages/login_page';

function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
