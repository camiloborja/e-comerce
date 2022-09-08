import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import getConfig from '../../utils/getConfig'

const usePost = (URL, obj) => {
  useEffect(() => {
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    return data
  }, [])
}

export default usePost