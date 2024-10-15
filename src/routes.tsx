import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import RestauranteItaliano from './pages/Italiana';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Home />} />
    <Route path="/italiana" element={<RestauranteItaliano />} />
  </Routes>
)

export default Rotas
