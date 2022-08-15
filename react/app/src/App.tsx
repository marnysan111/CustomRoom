import React from 'react';
import Top from './pages/top';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/home';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="top" element={<Top />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;