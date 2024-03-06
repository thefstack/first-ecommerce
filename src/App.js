import './assets/css/App.css';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.css';
import Page404 from  "./pages/Page404"
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get("https://first-ecommerce-api.onrender.com")
  })

  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
