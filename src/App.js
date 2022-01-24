import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <p>HATS PAGE</p>
)

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route path='shop/hats' element={<HatsPage/>} />
      <Route exact path='shop' element={<ShopPage/>} />
      {/* <Route path='' element={< />} /> */}
    </Routes>
  );
}

export default App;
