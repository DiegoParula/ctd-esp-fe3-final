import React from 'react'
import { useRecipeStates } from './utils/global.context'

const Footer = () => {
  const {state} = useRecipeStates()
  return (
    <footer >
      <div className='img-dh'>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
        </div>
      <div className='img-smedia'>
      <img src="/images/ico-facebook.png" alt='facebook-logo' />
      <img src="/images/ico-instagram.png" alt='instagram-logo' />
      <img src="/images/ico-tiktok.png" alt='tiktok-logo' />
      <img src="/images/ico-whatsapp.png" alt="whatsapp-logo" />
      <img src={state.theme === "Light" ? "/images/ico-light.png" : "/images/ico-x-dark.png"} alt="logo" />
      </div>  
    </footer>
  )
}

export default Footer
