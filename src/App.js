import './App.css'

import Header from './Header'
import Movies from './Movies'
import TextArea from './TextArea'
import FooterArea from './FooterText'
import LinkArea from './LinkArea'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <TextArea />
        <Movies />
        <FooterArea />
        <LinkArea />
      </div>
    </BrowserRouter>
  )
}

export default App
