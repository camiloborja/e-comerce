import React from 'react'
import './styles/productPurchase.css'

const ProductPurchase = ({ product }) => {
  return (
    <li className='card__purchase__item'>
      <h4 className='card__pruchase__name'>{product.title}</h4>
      <span className='card__purchase__quantity'>{product.productsInCart.quantity}</span>
      <span className='card__purchase__price'>{product.price}</span>
    </li>
  )
}

export default ProductPurchase