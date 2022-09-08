import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import useCounter from '../hooks/useCounter'
import './productCartInfo.css'

const ProductCartInfo = ({ product, getAllProductsCart }) => {

  const { decrement, increment, reset, counter } = useCounter(product.productsInCart.quantity);

  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch(err => console.log(err))

  }
  const handleAddProduct = () => {
    if (counter >= 0) {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      const obj = {
        "id": product.id,
        "newQuantity": counter
      }
      axios.patch(URL, obj, getConfig())
        .then(() => getAllProductsCart())
        .catch(err => console.log(err))
    }
  }

  return (
    <article className='cart__item'>
      <header className='cart__item__header'>
        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
      </header>
      <div className='cart__item__footer'>
        <div className='cart__item__footer__value'>
          <span className='cart__total__label'>Total products: </span>
          <span className='cart__quantity'>{product.productsInCart.quantity}</span>
          <span className='cart__total__label'>Unity value </span>
          <span className='cart__total__number'>{product.price} </span>
          <span className='cart__total__label'>Total value </span>
          <p className='cart__total__number'>{product.price * product.productsInCart.quantity}</p>
        </div>
        <form onSubmit={handleAddProduct} className='cart__item__counter'>
          <button onClick={decrement} className='cart__item__counter__btn'>-</button>
          <p className='cart__item__counter__value'>{product.productsInCart.quantity}</p>
          <button onClick={increment} className='cart__item__counter__btn'>+</button>
        </form>
      </div>
      <div className='cart__delete'>
        <button className='cart__delete__btn' onClick={handleDeleteProduct}><i className='bx bx-trash'></i></button>
      </div>

    </article>
  )
}

export default ProductCartInfo