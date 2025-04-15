import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import SingleBook from './SingleBook'
import BookObject from '../types'

const FetchBooks = function () {
  const [books, setBooks] = useState<BookObject[] | null>(null)
  //   books è un array di oggetti (libri)
  const [isLoading, setIsLoading] = useState(true)

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
        // i libri sono stati salvati nello stato!
        setIsLoading(false)
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
      {isLoading ? (
        <div>
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        // non-null assertion operator
        books!.map((b) => {
          return <SingleBook book={b} key={b.id} />
        })
      )}
    </div>
  )
}

export default FetchBooks
