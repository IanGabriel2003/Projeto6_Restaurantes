import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import { Cardapios } from './pages/Cardapios';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Home />} />
    <Route path="/cardapio/:id1" element={<Cardapios />} />
  </Routes>
)

export default Rotas
