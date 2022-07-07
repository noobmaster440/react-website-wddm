import React from 'react'
import Contribution from '../Contribution'
const Contributions = () => {
  return (
    <>
    Contributions
    <Contribution
      // img,wayTo,howTo,duration,reward
      wayTo="LakeShore Sweep"
      img={require("../../images/ocg-saving-the-ocean-xch7jXAaqqo-unsplash.jpg")}
      howTo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at tellus tempus nibh finibus finibus nec eget dolor. Nunc vel mollis lorem. Cras eget mauris sed lectus pors"
      duration={`10`}
      reward={100}
      
    />

    <Contribution
          // img,wayTo,howTo,duration,reward
          wayTo="LakeShore Sweep"
          img={require("../../images/elissa-garcia-MV1l4f_f1os-unsplash.jpg")}
          howTo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at tellus tempus nibh finibus finibus nec eget dolor. Nunc vel mollis lorem. Cras eget mauris sed lectus pors"
          duration={`10`}
          reward={100}
          
        />

    <Contribution
          // img,wayTo,howTo,duration,reward
          wayTo="LakeShore Sweep"
          img={require("../../images/ismael-paramo-Cns0h4ypRyA-unsplash.jpg")}
          howTo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at tellus tempus nibh finibus finibus nec eget dolor. Nunc vel mollis lorem. Cras eget mauris sed lectus pors"
          duration={`10`}
          reward={100}
          
        />

    <Contribution
          // img,wayTo,howTo,duration,reward
          wayTo="LakeShore Sweep"
          img={require("../../images/roman-synkevych-5wJ2GiYSifA-unsplash.jpg")}
          howTo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at tellus tempus nibh finibus finibus nec eget dolor. Nunc vel mollis lorem. Cras eget mauris sed lectus pors"
          duration={`10`}
          reward={100}
          
        />
      

    </>
  )
}

export default Contributions