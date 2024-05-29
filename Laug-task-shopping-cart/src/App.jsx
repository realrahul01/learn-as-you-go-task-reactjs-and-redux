import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import CartItem from './CartItem/CartItem';

function App() {

  return (
    <>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/cartItem' element={<CartItem/>}/>
        </Routes>
      </>
  )
}

export default App
