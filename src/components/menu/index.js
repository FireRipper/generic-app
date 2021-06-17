import React from 'react'
import MenuItem from './menu-item'

const Menu = ({ items }) => (
  <div className="menu">
    <ul className="menu-list">
      {items.map(({ id, link, label, icon }) => (
        <MenuItem key={id} label={label} link={link} icon={icon} />
      ))}
    </ul>
  </div>
)

export default Menu
