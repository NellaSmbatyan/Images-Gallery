import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Album1 from "./Components/Album1";
import Album2 from "./Components/Album2";
import Album3 from "./Components/Album3";
import Album4 from "./Components/Album4";
import Home from "./Components/Header";

import { ImageProvider } from "./context/ImageProvider";


function App() {
  return (
    <div className="allPage">
      <ImageProvider>
       <nav className="navbar">
        <a href="/">Home</a>
        <a href="/album1">Album1</a>
        <a href="/album2">Album2</a>
        <a href="/album3">Album3</a>
        <a href="/album4">Album4</a>
       </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="album1" element={<Album1 />} />
          <Route path="album2" element={<Album2 />} />
          <Route path="album3" element={<Album3 />} />
          <Route path="album4" element={<Album4 />} />
        </Routes>
      </ImageProvider>
    </div>
  );
}
export default App;
