import React, { useEffect } from 'react'

import './App.css'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Footer from './Footer'
import Navlinks from './Navlinks'
import Register from './Register'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import InfoSlider from './InfoSlider'
// import { FormatBoldRounded } from '@material-ui/icons'

function App() {
  const [{ loggedinuser }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if (userauth) {
        dispatch({
          type: 'SET_LOGIN',
          user: userauth,
        })
      } else {
        dispatch({
          type: 'SET_LOGIN',
          user: null,
        })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <Header />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <Header />
            <Navlinks />
            <InfoSlider />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
