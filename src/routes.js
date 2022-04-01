import BaseLayout from "./layouts/base_layout";
import MyPokemonPage from "./pages/my_pokemon_page";
import PokemonDetailPage from "./pages/pokemon_detail";
import PokemonListPage from "./pages/pokemon_list_page";

const { BrowserRouter, Route, Routes } = require("react-router-dom")

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/my-pokemon" element={<MyPokemonPage />} />
        </Route>
        <Route path="/detail/:id" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default Routing;