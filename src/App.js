import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import DriftPage from './components/DriftPage/DriftPage'
import ForzaPage from './components/ForzaPage/ForzaPage'
import HomePage from './components/HomePage/HomePage'
import Menu from './components/Menu/Menu'
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage'

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  )
}

export default App
