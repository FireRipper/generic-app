import React from 'react'
import { icons } from '../../data/object-of-icons'

/**
 * Button. Reusable component with some settings.
 * @param {string} nameIcon - icon is taken from the object 'icons" by name
 * @param {string} title
 * @param {string | ''} clsName
 * @param {boolean} disabled
 * @param {function} func
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ nameIcon, title, clsName = '', disabled = false, func = () =>  {} }) => (
  <div className={`button ${clsName}`} disabled={disabled}
       aria-valuetext={nameIcon} onClick={func}>
    <span className="button__icon">{icons[nameIcon]}</span>
    <span className="button__title">{title}</span>
  </div>
)

export default Button
