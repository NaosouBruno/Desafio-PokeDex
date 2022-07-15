import ListPokedex from "./components/organisms/listPokedex/listPokedex";
import HomeScreen from "./components/organisms/homescreen/homeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPokemon from "./components/molecules/aboutPokemon/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/pokedex" element={<ListPokedex />} />
        <Route path="/about/:id" element={<AboutPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
