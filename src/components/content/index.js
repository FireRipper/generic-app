import React, { useState, useEffect } from 'react'
import TermsAndConditions from '../terms-and-conditions'
import ChooseRole from '../choose-role'
import ChosenRole from '../chosen-role'
import Guide from '../guide'
import { useHttp } from '../../hooks/http.hook'
import { CSSTransition } from 'react-transition-group'

const Content = () => {
  const defaultValue = 'choose'
  const [element, setElement] = useState(defaultValue)
  const [title, setTitle] = useState('')
  const [icon, setIcon] = useState('')
  const [termsText, setTermsText] = useState('')
  const { request } = useHttp()

  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  useEffect(() => {
    const roleName = localStorage.getItem('role')
    const icon = localStorage.getItem('icon')
    if (roleName && icon) {
      setElement('chosen')
      setTitle(roleName)
      setIcon(icon)
    }
  }, [])

  const chooseRole = ({ target }) => {
    if (!target) return

    const chosenRole = target?.textContent || target.parentNode.textContent
    const nameIcon = target?.ariaValueText || target.parentNode.ariaValueText

    if (!chosenRole) return
    setElement('chosen')
    setIcon(nameIcon)
    setTitle(chosenRole)

    localStorage.setItem('role', chosenRole)
    localStorage.setItem('icon', nameIcon)
  }

  const cancelChooseRole = () => {
    setElement(defaultValue)
    setIcon('')
    setTitle('')
    localStorage.removeItem('role')
    localStorage.removeItem('icon')
    document.title = 'Generic App'
  }

  const handleTerms = async () => {
    const _apiUrl = 'https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource'
    try {
      setElement('terms')
      const data = await request(_apiUrl)
      setTermsText(data[0].text)
    } catch (err) {
      console.log(err.message)
      console.log('Failed to retrieve data from API')
    }
  }

  const closeTerms = () => {
    setElement('')
  }

  return (
    <div className="content-wrapper">
      {
        element === 'choose'
        && <CSSTransition in={true} timeout={500} classNames="choose-role-transition" unmountOnExit>
              <ChooseRole funcChoose={chooseRole} element={element} />
        </CSSTransition>
      }
      {
        element === 'chosen' &&
        <>
          <ChosenRole title={title} icon={icon} onCancel={cancelChooseRole} onClick={handleTerms} />
          <Guide moveTo={handleTerms} />
        </>
      }
      {
        element === 'terms' && <TermsAndConditions text={termsText} onClose={closeTerms} />
      }
    </div>
  )
}

export default Content
