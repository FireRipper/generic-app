import React from 'react'
import Button from '../button'
import { CSSTransition } from 'react-transition-group'

const ChooseRole = ({ funcChoose, element }) => (
  <CSSTransition in={element === 'choose'} timeout={500} classNames="choose-role-transition" unmountOnExit>
  <div className="choose-role">
    <h1 className="choose-role-title">Choose your role</h1>
    <div className="choose-role-subtitle">Please, choose your role in service.</div>
    <div className="choose-role-buttons">
      <Button clsName="choose-role__borrower"
              title="The Borrower"
              nameIcon="borrower"
              func={funcChoose}
      />
      <Button clsName="choose-role__lender"
              title="The Lender"
              nameIcon="lender"
              func={funcChoose}
      />
    </div>
  </div>
  </CSSTransition>
)

export default ChooseRole
