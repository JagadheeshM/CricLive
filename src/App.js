import './App.css';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.css';
import Body from './components/Body';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Live from './components/Live';
import News from './components/News';
import Upcoming from './components/Upcoming';
import Recent from './components/Recent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
        <Routes>
          <Route>
            <Route index element={<Body />} />
            <Route path="Recent" element={<Recent />} />
            <Route path="Live" element={<Live />} />
            <Route path="Upcoming" element={<Upcoming />} />
            <Route path="News" element={<News />} />
          </Route>
        </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
