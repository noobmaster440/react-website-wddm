import {Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React from 'react'

const Contribution = ({img,wayTo,howTo,duration,reward}) => {
  return (
    <div>
        <Card style={{ width: '23rem',height:'20rem'}}>
        <Card.Img style={{width:'15rem'}} variant="top" src={img} />
        <Card.Body>
            <Card.Title>{wayTo}</Card.Title>
            <Card.Text>
                {`${howTo}.
                The duration of the session is ${duration} days.`}
            </Card.Text>
            <Button variant="primary">{`Get $ ${reward}`}</Button>
        </Card.Body>
        </Card>

    </div>
  )
}

export default Contribution