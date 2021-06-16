import React from 'react'
import Button from '../button'

const Guide = ({ moveTo }) => (
  <div className="guide">
    <Button nameIcon="guide" title="Guide Flow" clsName="button-guide" func={moveTo} />
    <p className="guide-info">Study the guide flow for the convenience of using the service</p>
  </div>
)

export default Guide
