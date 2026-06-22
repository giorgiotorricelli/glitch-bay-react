import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import Home from "./components/pages/Home.jsx";
import OurProducts from './components/pages/OurProducts.jsx';
import NotFound from './components/pages/NotFound.jsx';
import ScrollReset from './components/ScrollReset.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<OurProducts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
