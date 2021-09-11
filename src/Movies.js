import React from 'react'
import Popular from './Popular'
import './movies.css'

function Movies() {
  return (
    <div className='movies'>
      <Popular title='Popular on Netflix' fetchUrl={'/Popular'} />

      <Popular title='Family Comedies' fetchUrl={'/Family'} />
      <Popular title='Bollywood Movies' fetchUrl={'/Bollywood'} />
      <Popular title='Action Movies' fetchUrl={'/Action'} />
      <Popular title='New Releases' fetchUrl={'/New'} />
      <Popular title='Movies Based on Real Life' fetchUrl={'/Real'} />
      <div className='blur'>
        <Popular title='Made in India' fetchUrl={'/Family'} />
      </div>
      <div className='blur2'>
        <Popular
          height='50%'
          title='Action & Adventure'
          fetchUrl={'/Bollywood'}
        />
      </div>
    </div>
  )
}
export default Movies
