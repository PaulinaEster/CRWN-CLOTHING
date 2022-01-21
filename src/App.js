import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';

const HatsPage = () => (
  <p>HATS PAGE</p>
)

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route path='/hats' element={<HatsPage/>} />
      {/* <Route path='' component={} /> */}
    </Routes>
  );
}

export default App;
