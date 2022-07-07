import './App.css';
import Header from './components/Header'
import Navbar from  './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Main from './components/pages/Main';
import Footer from './components/Footer';
import Contributions from './components/pages/Contributions';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Contribution from './components/Contribution';
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
