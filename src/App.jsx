import Router from 'preact-router';
import Home from './pages/Home'
import Now from './pages/Now'
import Readme from './pages/Readme'

import './App.css'

export function App() {
  return (
    <Router>
      <Home path="/"/>
      <Now path="/now"/>
      <Readme path="/readme"/>
    </Router>
  )
}