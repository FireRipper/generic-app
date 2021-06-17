import React from 'react'
import Button from '../button'

const MobileMenu = ({ active, items }) => (
  <div className={`mobile-menu ${active ? 'active' : ''}`}>
    {items.map(({ id, link, label, icon }) => {
      return (<a key={id} href={link} className="mobile-menu__link">{label}
      {icon && <span className="mobile-menu__icon">{icon}</span>}
      </a>)
    })}

    <div className="mobile-menu-divider" />
    <div className="mobile-menu-login">
      <Button link="/sign-in" title="Sign In" nameIcon="signIn" clsName="mobile-menu-sign-in"/>
      <Button link="/sign-up" title="Sign Up" nameIcon="signUp" clsName="mobile-menu-sign-up"/>
    </div>
  </div>
)

export default MobileMenu
