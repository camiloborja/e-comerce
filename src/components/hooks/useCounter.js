
import { useState } from 'react'

const useCounter = (initialValue) => {

  let value = 1
  if (initialValue) {
    value = initialValue
  }

  const [counter, setCounter] = useState(value);

  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);
  const reset = () => setCounter(counter = 1);

  return { decrement, increment, reset, counter };
};

export default useCounter;