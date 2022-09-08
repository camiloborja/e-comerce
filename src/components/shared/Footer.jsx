import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <span className='footer__logo'>E-comerce</span>
      <hr />
      <nav className='footer__nav'>
        <a className='footer__btn' href=''>SMART TV</a>
        <a className='footer__btn' href=''>COMPUTERS</a>
        <a className='footer__btn' href=''>SMARTPHONES</a>
      </nav>
      <hr />
      <nav className='footer__nav'>
        <a className='footer__btn' href=''>CONTACTO</a>
        <a className='footer__btn' href=''>AYUDA</a>
        <a className='footer__btn' href=''>CÓMO COMPRAR</a>
        <a className='footer__btn' href=''>TERMINOS {'&'} CONDICIONES</a>
      </nav>
      <hr />
      <div className='footer__safe'>
        <p>Compra 100% Segura</p>
        <div className='footer__safe__icons'>
          <i className='bx bx-qr' ></i>
          <i className='bx bx-shield-quarter'></i>
          <span>COMPRA CON LA GARANTIA DEL E-COMERCE</span>
        </div>
      </div>
      <hr />
      <div className='footer__social'>
        <span>SIGUENOS EN</span>
        <a href="#"><i className='bx bxl-linkedin-square' ></i></a>
        <a href="#"><i className='bx bxl-instagram'></i></a>
        <a href="#"><i className='bx bxl-facebook'></i></a>
      </div>
    </div>

  )
}

export default Footer