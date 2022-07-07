import './App.css';
import Header from './components/Header'
import Navbar from  './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Main from './components/pages/Main';
import Footer from './components/Footer';
import Contribution from './components/pages/Contribution';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
const App=()=>{
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contribution' element={<Contribution/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App;
