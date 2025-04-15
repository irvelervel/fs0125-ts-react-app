import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

interface Movie {
  Title: string
  Year: string
  Genre: string
}

interface FunctionalComponentProps {
  sottotitolo: string
}

const FunctionalComponent = function (props: FunctionalComponentProps) {
  const [name, setName] = useState('Mario')
  //   const [counter, setCounter] = useState(0)
  const [myMovie, setMyMovie] = useState<null | Movie>(null)
  // come fate a dire a TS che il valore iniziale di uno useState non
  // necessariamente rappresenterà il TIPO di quel dato per sempre?

  useEffect(() => {
    // aka componentDidMount
    setMyMovie({
      Title: 'Iron Man',
      Year: '2008',
      Genre: 'Action',
    })
  }, [])

  return (
    <div>
      <h2>Componente a FUNZIONE</h2>
      <h4>{props.sottotitolo}</h4>
      <p>Il tuo nome è {name}</p>
      <Button
        onClick={() => {
          setName(name === 'Mario' ? 'Luigi' : 'Mario')
        }}
      >
        CAMBIA NOME
      </Button>
      {myMovie && <p>{myMovie.Title}</p>}
    </div>
  )
}

export default FunctionalComponent
