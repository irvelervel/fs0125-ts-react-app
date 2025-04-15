import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <ClassComponent sottotitolo="Contenuto del sottotitolo" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
