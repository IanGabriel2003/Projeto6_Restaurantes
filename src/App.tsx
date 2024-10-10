import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalCss } from './styles';

import Home from './pages/Home';
import RestauranteItaliano from './pages/Italiana';
import Footer from './components/Footer';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurantes',
    element: <RestauranteItaliano />
  }
]);

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <div className='container'>
      </div>
      <Footer />
    </>
  )
}

export default App;
