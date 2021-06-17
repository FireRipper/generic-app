import React, { useState } from 'react'
import Logo from '../../icons/logo-generic.svg'
import Menu from '../menu'
import Button from '../button'
import MobileMenu from '../menu/mobile-menu'
import { icons } from '../../data/object-of-icons'
import { menuItems } from '../../data/array-of-menu-items'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="Generic company" className="header-logo__img" />
      </div>
      <Menu items={menuItems} />
      <MobileMenu active={open} items={menuItems} />
      <div className={`header-btn ${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="header-btn__burger">
          {icons.burger}
        </div>
        <div className="header-btn__close">
          {icons.close}
        </div>
      </div>
      <div className="header-login">
        <Button nameIcon="signIn" title="Sign In" clsName="button-sign-in" link="/sign-in" />
        <Button nameIcon="signUp" title="Sign Up" clsName="button-sign-up" link="/sign-up" />
      </div>
    </div>
  )
}
export default Header
