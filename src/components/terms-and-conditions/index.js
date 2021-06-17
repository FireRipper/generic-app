import React, { useRef, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import Button from '../button'
import Loader from '../loader'

const TermsAndConditions = ({ text, onClose }) => {
  const { error, loading } = useHttp()
  const [isReading, setIsReading] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [scrollFunc, setScrollFunc] = useState(true)

  const refTerms = useRef(null)
  useEffect(() => {
    if (refTerms && text) {
      setScrollHeight(+(refTerms.current.scrollHeight - refTerms.current.offsetHeight))
    }
  }, [refTerms, text])

  const onScroll = () => {
    const scrollTop = refTerms.current.scrollTop

    if (scrollHeight - 100 < scrollTop) {
      setIsReading(true)
      setScrollFunc(false)
    }
  }

  return (
    <div className="terms">
      <div className="terms-close" onClick={onClose}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="terms-close__icon">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M8.08659 7.01614L13.8219 1.16776C14.0687 0.89858 14.0577 0.482259 13.7971 0.226496C13.5364 -0.0292666 13.12 -0.0324176 12.8555 0.219372L7.12919 6.05872L1.16804 0.21034C0.997378 0.0310759 0.742535 -0.0408382 0.50334 0.0227684C0.264146 0.0863751 0.0786819 0.275376 0.0196006 0.515733C-0.0394806 0.75609 0.0372271 1.00954 0.219675 1.17679L6.17179 7.01614L0.219675 12.8555C-0.0321093 13.12 -0.0289582 13.5364 0.226799 13.797C0.482557 14.0577 0.898868 14.0687 1.16804 13.8219L7.12919 7.97356L12.8555 13.8129C13.12 14.0647 13.5364 14.0615 13.7971 13.8058C14.0577 13.55 14.0687 13.1337 13.8219 12.8645L8.08659 7.01614Z"
                fill="#BEC2C6" />
        </svg>
      </div>
      <h2 className="terms-title">
        Terms & Conditions
      </h2>
      <div className="terms-subtitle">
        You should obliged to apply the Terms & Conditions to use the service.
      </div>
      <div className="terms-text">
        <div className={`terms-text__overlay ${!isReading ? 'active' : ''}`}>
          <div className="terms-text-content" ref={refTerms} onScroll={scrollFunc ? onScroll : null}>
            {!text && loading && <div className="terms-loader"><Loader /></div>}
            {error && 'Error receiving data from API'}
            {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
          </div>
        </div>
      </div>
      <Button nameIcon="checkmark" title="I Agree" clsName="button-agree" disabled={!isReading} func={onClose} />
    </div>
  )
}

export default TermsAndConditions
