import { BrowserRouter as Router, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import './App.scss'
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Layout/> }>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Characters' element={<Characters/>}/>
            </Route>
          </Routes>
        </Router>
    </div>
  )
}
function Layout(){
  return(
    <>
      <nav>
        <Link to='/Home'>Casa</Link>
        <Link to='/Characters'>Characters</Link>
      </nav>
      <Outlet />
    </>
  )
}
export default App
