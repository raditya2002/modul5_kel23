import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonContextProvider from "./components/PokemonContext";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <Router>
      <PokemonContextProvider>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </PokemonContextProvider>
    </Router>
  );
}

export default App;
