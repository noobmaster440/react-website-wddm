import React from 'react'
import { Seed } from './Seed'
import Contribution from '../Contribution'
import '../../index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Contributions = () => {

  const contributionCard=(contribution)=>{
    return(
      <Contribution
        wayTo={contribution.wayTo}
        img={contribution.img}
        howTo={contribution.howTo}
        duration={contribution.duration}
        reward={contribution.reward}
      />
    )
  }
  return (
    <>
      <Navbar/>
      <div className='gridsysoutline'>
      <h3>Ways to Contribute in the BeeCause</h3>

      <div className='gridsys'>
        {Seed.map(contributionCard)}
      </div>
      </div>
      <Footer/>
    </>
    
  )
}

export default Contributions