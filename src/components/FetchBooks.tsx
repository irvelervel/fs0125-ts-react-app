import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const FetchBooks = function () {
  const [books, setBooks] = useState([])
  //   books è un array di oggetti (libri)

  const getBooks = () => {
    const booksURL = 'https://striveschool-api.herokuapp.com/food-books'
    fetch(booksURL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nel recupero libri')
        }
      })
      .then((arrayOfBooks) => {
        console.log('BOOKS', arrayOfBooks)
        setBooks(arrayOfBooks)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    // come un componentDidMount
    // si lancerà una sola volta all'avvio della pagina
    getBooks()
  }, [])

  return (
    <div>
      <h2>Benvenuto nella mia libreria!</h2>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{books[0].description}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FetchBooks
