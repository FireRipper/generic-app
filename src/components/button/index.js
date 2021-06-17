import React from 'react'
import { icons } from '../../data/object-of-icons'

/**
 * Button. Reusable component with some settings.
 * @param {string} nameIcon - icon is taken from the object 'icons" by name
 * @param {string} title
 * @param {string | ''} clsName
 * @param {boolean} disabled
 * @param {string} link
 * @param {function} func
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ nameIcon, title, clsName = '', disabled = false,
                  link = '', func = () => {}
                }) => (
  <div className={`button ${clsName}`} disabled={disabled}
       aria-valuetext={nameIcon} onClick={func}>
    <span className="button__icon">{icons[nameIcon]}</span>
    {link
      ? <a href={link} className="button__link">{title}</a>
      : <span className="button__title">{title}</span>
    }
  </div>
)

export default Button
