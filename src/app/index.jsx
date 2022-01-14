import { useEffect } from 'react'
import { withProviders } from './providers/index'
import { Routing } from '../pages/index'

const setBodyClass = () => { document.body.classList.add("h-full"); }
const setHTMLTagClass = () => { document.getElementsByTagName("html")[0].className = "h-full bg-white"; }


const App = () => {
  useEffect(() => {
    setBodyClass();
    setHTMLTagClass();
  });
  return (
    <div className='App'>
      <Routing />
    </div>
  )
}

export default withProviders(App)
