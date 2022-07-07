import React from 'react'
import { Seed } from './Seed'
import Contribution from '../Contribution'
import '../../index.css'

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
    <div className='gridsysoutline'>
      <h3>Ways to Contribution</h3>
      <div className='gridsys'>
        {Seed.map(contributionCard)}
      </div>
   
    </div>
  )
}

export default Contributions