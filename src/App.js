import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes as needed */}
      {/* <Route path="/videos" element={<VideoPlatform />} /> */}
      {/* <Route path="/participate" element={<ParticipateForm />} /> */}
    </Routes>
  );
}

export default App; 