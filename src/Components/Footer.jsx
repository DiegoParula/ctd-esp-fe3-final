import React from 'react'
import { useRecipeStates } from './utils/global.context'

const Footer = () => {
  const {contextTheme} = useRecipeStates()
  return (
    <footer >
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
