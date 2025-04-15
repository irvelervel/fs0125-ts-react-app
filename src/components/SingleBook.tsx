import { Card, Button } from 'react-bootstrap'
import BookObject from '../types'
import { useNavigate } from 'react-router-dom'

interface SingleBookProps {
  book: BookObject
}

const SingleBook = function (props: SingleBookProps) {
  const navigate = useNavigate()

  return (
    <Card>
      <Card.Img variant="top" src={props.book.imageUrl} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.description}</Card.Text>
        <Card.Text>{props.book.price}$</Card.Text>
        <Button
          onClick={() => {
            // portare l'utente alla pagina /details/id-del-libro
            navigate('/details/' + props.book.id)
          }}
        >
          VAI AI DETTAGLI
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
