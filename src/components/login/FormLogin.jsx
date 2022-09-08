import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './formLogin.css'

const FormLogin = () => {
  const { register, handleSubmit, reset } = useForm(true)
  const [isLoged, setIsLoged] = useState()

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        // setIsLoged(false)
      })
      .catch(err => console.log(err))
  }
  // const exitLogged = () => {
  //   reset(
  //     {
  //       email: '',
  //       password: ''
  //     }
  //   )
  //   localStorage.clear();
  //   setIsLoged(true)
  // }


  return (
    <form className='login__form' onSubmit={handleSubmit(submit)}>
      <h2 className='login__tittle'>Welcome! Enter your email and password to continue</h2>
      <div className='login__div'>
        <label className='login__label' htmlFor="email">Email</label>
        <input {...register('email')}
          className='login__input'
          type="email"
          id="email"
          placeholder='Enter your email' />
      </div>
      <div className='login__div'>
        <label className='login__label' htmlFor="password">Password</label>
        <input {...register('password')}
          className='login__input'
          type="password" id="password"
          placeholder='Enter your password' />
      </div>
      <button className='login__btn'>Login</button>
      <div className='login__sign__up'>
        <span className='login__create'>Don't have an account?</span>
        <button className='login__btn__create'>Sign Up</button>
      </div>

    </form>
  )


}

export default FormLogin