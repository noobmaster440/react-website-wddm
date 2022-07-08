import { useState } from 'react'
import '../index.css'
const Form = ({ onAdd }) => {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Mail, setMail] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!Name) {
      alert('Please enter all the fields')
      return
    }

    onAdd({ Name, Email, Mail })

    setName('')
    setEmail('')
    setMail(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Enter Name'
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Email</label>
        <input
          type='text'
          placeholder='Enter email'
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Mail Subscription</label>
        <input
          type='checkbox'
          checked={Mail}
          value={Mail}
          onChange={(e) => setMail(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Info' className='btn btn-block' />
    </form>
  )
}

export default Form