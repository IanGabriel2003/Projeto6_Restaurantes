import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import RestauranteItaliano from './pages/Pratos';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Home />} />
    <Route path="/pratos" element={<RestauranteItaliano />} />
  </Routes>
)

export default Rotas
