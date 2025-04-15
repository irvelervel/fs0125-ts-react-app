import { useState } from 'react'
import { Form } from 'react-bootstrap'

const MyForm = function () {
  const [formValues, setFormValues] = useState({
    name: '',
    bio: '',
  })

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(formValues)
          // fetch()
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={formValues.name}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                name: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={formValues.bio}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                bio: e.target.value,
              })
            }
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default MyForm
