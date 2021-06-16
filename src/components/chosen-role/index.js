import React from 'react'
import Button from '../button'
import { icons } from '../../data/object-of-icons'

const ChosenRole = ({ title = '', icon = '', onCancel = () => {}, onClick}) => (
  <div className="chosen-role">
    <div className="chosen-role-box">
      <h2 className="chosen-role-title">{title}</h2>
      <div className="chosen-role-icon">{icons[icon]}</div>
    </div>

    <div className="chosen-role-subtitle">You have chosen the role -&nbsp;
      <span className="chosen-role-span">{title}.</span></div>
    <div className="chosen-role-buttons">
      <Button clsName="chosen-role__button"
              title="Go To Cabinet"
              nameIcon={icon}
              func={onClick}
      />
      <Button clsName="chosen-role__cancel"
              title="Cancel"
              nameIcon="close"
             func={onCancel}
      />
    </div>
  </div>
)

export default ChosenRole
