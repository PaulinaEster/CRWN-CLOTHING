import './App.css';
import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInSingOut from './pages/sing-in-sing-out/sing-in-sing-out.component';
import { auth } from './firebase/firebase.utils';
import { Component } from 'react';

const HatsPage = () => (
  <p>HATS PAGE</p>
)

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='shop/hats' element={<HatsPage />} />
          <Route exact path='shop' element={<ShopPage />} />
          <Route path='/signin' element={<SingInSingOut />} />
          {/* <Route path='' element={< />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
