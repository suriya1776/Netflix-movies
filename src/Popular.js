import React, { useState, useEffect, useRef } from 'react'

import api from './api/api'
import './popular.css'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi'

function Popular({ title, fetchUrl }) {
  const [popular, setPopular] = useState([])
  const [scrolleve, setScrolleve] = useState(false)
  const [scrollend, setScrollend] = useState(false)
  const transformRef = useRef()

  useEffect(() => {
    api
      .get(fetchUrl)
      .then((res) => {
        setPopular(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [fetchUrl])

  const scroll = (e) => {
    console.log(e)
    console.log(e.timeStamp)
    const ent = e.target.scrollLeft

    if (ent >= 150) {
      setScrolleve(true)
    } else {
      setScrolleve(false)
    }

    if (ent >= 2400) {
      setScrollend(true)
    } else {
      setScrollend(false)
    }
  }

  const transforms = (scrollOffset) => {
    transformRef.current.scrollLeft += scrollOffset
  }

  return (
    <div className='main__row'>
      <p className='title'>{title}</p>
      <div>
        <span className={scrolleve ? 'chevron__row1 ' : 'chevron__rowin'}>
          <HiOutlineChevronLeft
            color='var(--color-button)'
            size='1.5rem'
            onClick={() => transforms(-150)}
          />
        </span>

        <div className='sub__row' onScroll={scroll} ref={transformRef}>
          {popular.map((image) => (
            <div className='row'>
              <img className='row__img' src={image.image} alt='' />
              <p className='row__name'>{image.name}</p>
            </div>
          ))}
        </div>

        <span className={scrollend ? 'chevron__rowout' : 'chevron__row'}>
          <HiOutlineChevronRight
            color='var(--color-button)'
            size='1.5rem'
            onClick={() => transforms(150)}
          />
        </span>
      </div>
    </div>
  )
}

export default Popular
