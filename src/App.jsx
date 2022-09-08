import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductDetails from './components/Routes/ProductDetails'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'
import { useEffect } from 'react'
import axios from 'axios'
import Cart from './components/shared/Cart'
import Footer from './components/shared/footer'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  // const URL='https://ecommerce-api-react.herokuapp.com/api/v1/users'
  // const obj ={
  //   firstName: "Camilo",
  //   lastName: "Borja",
  //   email: "camiloborja@hotmail.com",
  //   password: "12345678",
  //   phone: "3224980314",
  //   role: "admin"
  // }
  // useEffect(() => {
  //   axios.post(URL, obj)
  //     .then(res=>console.log(res.data))
  //     .catch(err=>console.log(err))
  // }, [])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <footer>
        <Footer />
      </footer>

    </div>

  )
}

export default App
