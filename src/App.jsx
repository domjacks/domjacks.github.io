import Router from 'preact-router';
import Home from './pages/Home'
import Now from './pages/Now'
import Readme from './pages/Readme'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

export function App() {
  return (
    <div class="main">
      <Header />
      <div class="content">
        <Router>
          <Home path="/" />
          <Now path="/now" />
          <Readme path="/readme" />
        </Router>
      </div>
      <Footer />
    </div>
  )
}