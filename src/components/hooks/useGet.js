import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const useGet = URL => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(URL)
            .then(res => { setData(res.data.data.product) })
            .catch(err => console.log(err))
    }, [URL])

    return data
}

export default useGet