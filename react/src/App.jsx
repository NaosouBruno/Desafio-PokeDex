import ListPokedex from "./components/organisms/listPokedex/listPokedex";
import HomeScreen from "./components/organisms/homescreen/homeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPokemon from "./components/molecules/aboutPokemon/about";
import BaseStats from "./components/molecules/baseStats/base";
import Evolution from "./components/molecules/evolution/evolution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/pokedex" element={<ListPokedex />} />
        <Route path="/about/:id" element={<AboutPokemon />} />
        <Route path="/baseStats/:id" element={<BaseStats />} />
        <Route path="/evolution" element={<Evolution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
