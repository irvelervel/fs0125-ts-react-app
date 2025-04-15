import { Link, useParams } from 'react-router-dom'

type Params = {
  myId: string
  // così istruiamo il componente Details sul fatto che riceverà dall'oggetto
  // "parametri" una proprietà che si chiama "myId"
}

const Details = function () {
  const parametri = useParams<Params>()
  console.log(parametri.myId)

  return (
    <div>
      <h2>COMPONENTE DETTAGLI</h2>
      <p>Il parametro recuperato dall'URL è: {parametri.myId}</p>
      <Link to="/">
        <h3>TORNA IN HOME</h3>
      </Link>
    </div>
  )
}

export default Details
