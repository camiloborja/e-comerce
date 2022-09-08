import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import './cardHome.css'
const CardHome = ({ product }) => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  //funcion para agregar un producto al carrito
  const handleAddCart = e => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  return (
    <article onClick={handleClick} className='card__home'>
      <div className='card__home__header'>
        <img className='card__home__img' src={product.productImgs[0]} alt="Img no disponible" />
      </div>
      <div className="card__home__body">
        <h3 className='card__home__name'>{product.title}</h3>
        <section className='card__home__price'>
          <h4 className='card__home__price__label'>Price</h4>
          <span className='card__home__value'>{product.price}</span>
        </section>
        <div className='card__btn__container'>
          <button onClick={handleAddCart} className='card__home__btn'><i className='bx bx-cart-add'></i></button>
        </div>
      </div>
    </article>
  )
}

export default CardHome