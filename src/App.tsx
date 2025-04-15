import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'
import { Container, Row, Col } from 'react-bootstrap'
import FunctionalComponent from './components/FunctionalComponent'
import MyForm from './components/MyForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/Details'
import FetchBooks from './components/FetchBooks'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <Routes>
              <Route
                path="/"
                element={
                  <ClassComponent
                    sottotitolo="Contenuto del sottotitolo"
                    value={100}
                  />
                }
              />
              <Route
                path="/func"
                element={
                  <FunctionalComponent sottotitolo="Contenuto del sottotitolo" />
                }
              />
              <Route path="/form" element={<MyForm />} />
              <Route path="/fetch" element={<FetchBooks />} />
              <Route path="/details/:myId" element={<Details />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
