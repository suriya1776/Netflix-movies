import React from 'react'
import './FooterText.css'

function FooterText() {
  return (
    <div className='main__footer'>
      <div className='footer__text'>
        <h1 className='footer__h'>There’s even more to watch.</h1>
        <p className='footer__p'>
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals and more. Watch as much
          as you want, anytime you want.
        </p>
        <button className='footer__b'>JOIN NOW</button>
      </div>
    </div>
  )
}

export default FooterText
