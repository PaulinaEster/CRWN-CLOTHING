import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const HatsPage = () => (
  <p>HATS PAGE</p>
)

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='shop/hats' element={<HatsPage/>} />
        <Route exact path='shop' element={<ShopPage/>} />
        {/* <Route path='' element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;
