import {Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React from 'react'
import '../index.css'

const Contribution = ({img,wayTo,howTo,duration,reward}) => {
  return (
    <div>
        <Card className="cardcont" >
        <Card.Img variant="top" src={img} />
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