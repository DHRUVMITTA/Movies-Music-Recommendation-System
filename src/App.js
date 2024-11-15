import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/sign-in" element={<SignInPage />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
