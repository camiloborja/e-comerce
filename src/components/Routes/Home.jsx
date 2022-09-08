import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles/home.css'
import CardHome from '../home/CardHome'
import { useState } from 'react'
import { useEffect } from 'react'


const Home = () => {

  const products = useSelector(state => state.products)
  const [filterProducts, setFilterProducts] = useState()
  const [deleteFilters, setDeleteFilters] = useState(false)
  const [filterCategory, setFilterCategory] = useState()

  const categoryFilter = category => {
    if (deleteFilters) {
      const filter = products.filter(e => e.category.name === category)
      setFilterProducts(filter)
    } else {
      setFilterProducts(products)
    }
  }

  useEffect(() => {
    categoryFilter(filterCategory)
  }, [deleteFilters, filterCategory])

  const smartTvFilter = () => {
    setFilterCategory('Smart TV')
    setDeleteFilters(true)
  }
  const smartphonesFilter = () => {
    setFilterCategory('Smartphones')
    setDeleteFilters(true)
  }
  const computersFilter = () => {
    setFilterCategory('Computers')
    setDeleteFilters(true)
  }
  const deleteFilter = () => {
    setDeleteFilters(false)
  }


  console.log(filterProducts)
  return (
    <div className='home'>
      <div>
        <div className='home__filters'>
          <h2>Category</h2>
          <button className='home__filters__btn delete' onClick={deleteFilter}>All Products</button>
          <button className='home__filters__btn' onClick={smartTvFilter}>Smart TV</button>
          <button className='home__filters__btn' onClick={computersFilter}>Computers</button>
          <button className='home__filters__btn' onClick={smartphonesFilter}>Smartphones</button>
        </div>
      </div>

      <div className='home__contairer__card'>
        {
          filterProducts?.map(product => (
            <CardHome
              key={product.id}
              product={product} />
          ))
        }
      </div>

    </div>
  )
}

export default Home