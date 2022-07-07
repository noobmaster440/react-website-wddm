import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contributions from './components/pages/Contributions';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
const App=()=>{
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contribution' element={<Contributions/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App;
