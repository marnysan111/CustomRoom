import React from 'react';
import Top from './pages/top';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="top" element={<Top />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;