import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import Home from "./components/pages/Home.jsx";
import OurProducts from './components/pages/OurProducts.jsx';
import ProductDetail from './components/pages/ProductDetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="products" element={<OurProducts />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
