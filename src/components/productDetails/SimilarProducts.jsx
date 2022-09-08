import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import './similarProducts.css'

const SimilarProducts = ({ productInfo }) => {
  const [filterProducts, setFilterProducts] = useState()

  const products = useSelector(state => state.products)

  useEffect(() => {
    if (productInfo) {
      const filter = products.filter(e => e.category.name === productInfo.category)
      setFilterProducts(filter)
    }
  }, [productInfo])

  return (
    <div className='similar__products__container'>
      {
        filterProducts?.map(product => {
          if (productInfo.title !== filterProducts.title) {
            return <CardHome
              key={product.id}
              product={product}
            />
          }
        })
      }

    </div>
  )
}

export default SimilarProducts