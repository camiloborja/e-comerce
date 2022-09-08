import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import useCounter from '../hooks/useCounter'
import useGet from '../hooks/useGet'
import SimilarProducts from '../productDetails/SimilarProducts'
import './styles/productDetails.css'

const ProductDetails = () => {
  const { decrement, increment, reset, counter } = useCounter();
  const { id } = useParams()
  const productInfo = useGet(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)


  const handleAddCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      "id": productInfo.id,
      "quantity": counter
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <main className='product__detail'>
      <div className='product__details__main'>
        <div className='product__detail__img__box'>
          <img className='product__detail__img' src={productInfo?.productImgs[0]} alt="" />
        </div>
        <div className='product__details__body'>
          <h3 className='product__detail__name'>{productInfo?.title}</h3>
          <p className='product__detail__description'>{productInfo?.description}</p>
          <div className='product__detail__price'>
            <div className='product__detail__price__value'>
              <span>Price</span>
              <span className='product__detail__value'>{`$ ${productInfo?.price}`}</span>
            </div>
            <div className='product__detail__add'>
              <div className='product__detail__counter'>
                <button onClick={decrement} className='product__detail__counter__btn'>-</button>
                <p className='product__detail__counter__value'>{counter}</p>
                <button onClick={increment} className='product__detail__counter__btn'>+</button>
              </div>
            </div>
          </div>
          <button onClick={handleAddCart} className='product__detail__btn'>Add To cart</button>
        </div>
      </div>
      <div className='product__detail__similar__products'>
        <h3>Discover similar items</h3>
        <SimilarProducts
          productInfo={productInfo}
        />
      </div>
    </main>
  )
}

export default ProductDetails