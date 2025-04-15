import { Component } from 'react'
import { Button } from 'react-bootstrap'

// in TS è necessario tipizzare le props che i componenti intendono ricevere!
// creiamo un'interfaccia per le PROPS che questo componente intende ricevere!

interface ClassComponentProps {
  // che props si aspetta di ricevere questo componente?
  sottotitolo: string
  value?: number
}

interface ClassComponentState {
  name: string
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    name: 'Mario',
  }

  render() {
    return (
      <div>
        <h2>Componente a classe!</h2>
        <h4>{this.props.sottotitolo}</h4>
        <p>Il contatore vale: {this.props.value || 0}</p>
        <p>Il tuo nome è {this.state.name.toUpperCase()}</p>
        <Button
          variant="success"
          onClick={() => {
            this.setState({
              name: this.state.name === 'Mario' ? 'Luigi' : 'Mario',
            })
          }}
        >
          CAMBIA NOME
        </Button>
      </div>
    )
  }
}

export default ClassComponent
