import React from 'react'

const MenuItem = ({ link, label, icon }) => (
  <li className="menu__item">
    <a href={link} className="menu__link">
      {label}
      {icon && <span className="menu__icon">{icon}</span>}
    </a>
  </li>
)

export default MenuItem
