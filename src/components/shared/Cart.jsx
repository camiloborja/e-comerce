import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'
import './styles/cart.css'

const Cart = () => {
  const [cartProducts, setCartProducts] = useState()
  const [totalPrice, setTotalPrice] = useState()
  const getAllProductsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => {
        const products = res.data.data.cart.products
        setCartProducts(products)
        const total = products.reduce((acc, cv) => {
          return Number(cv.price) * cv.productsInCart.quantity + acc
        }, 0)
        setTotalPrice(total)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllProductsCart()
  }, [])

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      "street": "Green St. 1456",
      "colony": "Southwest",
      "zipCode": 12345,
      "city": "USA",
      "references": "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        getAllProductsCart()
        setTotalPrice(0)
      })
      .catch(err => console.log(err))

  }
  return (
    <section className='cart'>
      <h2>Shopping cart</h2>
      <div className='cart__container__info'>
        {
          cartProducts?.map(product => (
            <ProductCartInfo
              key={product.id}
              product={product}
              getAllProductsCart={getAllProductsCart}
            />
          ))
        }
      </div>

      <div className='cart__footer'>
        <span className='cart__total__global'>Total</span>
        <p className='cart__total__global-value'>{totalPrice}</p>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>

      </div>
    </section>
  )
}

export default Cart