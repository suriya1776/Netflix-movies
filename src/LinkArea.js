import React from 'react'
import './LinkArea.css'
import { FaGlobe } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'

function LinkArea() {
  const [display, setDisplay] = useState(true)

  const display1 = () => {
    if (display === false) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }
  return (
    <div className='linkarea'>
      <h5 className='linkarea_h'>Questions? Contact us.</h5>
      <div className='linkarea_li'>
        <div className='linkarea_li1'>
          <li>FAQ</li>
          <li>Media Centre</li>
          <li>Ways to Watch</li>
          <li>Help </li>
        </div>
        <div className='linkarea_li1'>
          <li>CentreAccount </li>
          <li>InvestorRelations</li>
          <li>Jobs</li>
          <li>Ways to Watch</li>
        </div>
        <div className='linkarea_li1'>
          <li> Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>CorporateInformation</li>
        </div>
        <div className='listarea_li1'>
          <li> Contact Us</li>
          <li>Speed Test</li>
          <li>LegalNotices</li>
          <li>Only on Netflix</li>
        </div>
      </div>
      <button className='button_d' onClick={() => display1()}>
        <div className={display ? 'button_dropn' : 'button_drop'}>
          <li>English</li>
          <li>Hindi</li>
        </div>
        <FaGlobe size='1rem' />
        <div className='button_in'>
          English
          <IoMdArrowDropdown size='1.2rem' />
        </div>
      </button>
    </div>
  )
}

export default LinkArea
