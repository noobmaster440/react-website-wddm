import React from 'react'
import '../index.css'
import Button from './Button'
const Main = () => {
  return (
    <div className='main-container'>
        <h1>Save the Bees and so the Honey</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <div className='main-btn'>
            <Button
            className='btns'
            buttonStyle='btn-outline'
            buttonSize='btn-large'
            >
            HOW CAN I CONTRIBUTE ?
            </Button>
            <Button className='btns' buttonStyle='btn-primary'
            buttonSize='btn-large' onClick={console.log('test')}>
                VOLUNTEER<i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}
export default Main