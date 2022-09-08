
import React from 'react'
import ProductPurchase from './ProductPurchase'
import './styles/purchasesCard.css'


const PurchaseCard = ({ purchase }) => {


  return (
    <article className='cart__purchase'>
      <h3 className='cart__purchase__date'>{purchase.updatedAt}</h3>
      <ul className='cart__purchase__list'>
        {
          purchase.cart.products.map(product => (
            <ProductPurchase
              key={product.id}
              product={product}
            />

          ))
        }
      </ul>
    </article>
  )
}

export default PurchaseCard