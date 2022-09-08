import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../purchases/PurchaseCard'
import axios from 'axios'
import './styles/purchases.css'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='purchases'>
      <div className='purchases__cards'>
        {
          purchases?.map(purchase => (
            <PurchaseCard
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases