import React from 'react'
import MenuItem from './menu-item'
import { icons } from '../../data/object-of-icons'

const menuItems = [
  { id: 'y78yhurh', link: '#', label: 'Expertise', icon: '' },
  { id: '7h988n89', link: '#', label: 'Industries', icon: '' },
  { id: 'k00kj828', link: '#', label: 'News', icon: '' },
  { id: 'kio00jj2', link: '#', label: 'Partners', icon: '' },
  { id: 'k00ofil2', link: '#', label: 'Careers', icon: '' },
  { id: 'knun99n2', link: '#', label: 'About Us', icon: icons.chevron }
]

const Menu = () => (
  <div className="menu">
    <ul className="menu-list">
      {menuItems.map(({ id, link, label, icon }) => (
        <MenuItem key={id} label={label} link={link} icon={icon} />
      ))}
    </ul>
  </div>
)

export default Menu
