import React from 'react'
import Logo from '../../icons/logo-generic.svg'
import Menu from '../menu'
import Button from '../button'

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <img src={Logo} alt="Generic company" className="header-logo__img" />
    </div>
    <Menu />
    <div className="header-login">
      <Button nameIcon="signIn" title="Sign In" clsName="button-sign-in" />
      <Button nameIcon="signUp" title="Sign Up" clsName="button-sign-up" />
    </div>
  </div>
)

export default Header
