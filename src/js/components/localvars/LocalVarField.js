import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import DragHandle from '../DragHandle'
import '../../../styles/fields.css'

const LocalVarField = SortableElement( ({ index, id, value, onChange, onRemove }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    onChange(newArg, id)
  }

  const onFieldRemove = (event) => {
    onRemove(id)
  }

  return (
    <Container className='local-var-field'>
      <Row>
        <Col md="3">
          <DragHandle/>
        </Col>
        <Col md="6">
          <div className='text-center'>
            <Label>Name</Label>
          </div>
        </Col>
        <Col md="3">
          <div className='text-right'>
            <Button color='danger' size='xsmall' onClick={onFieldRemove}>
              Remove
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Input
            type='text'
            bsSize='small'
            value={value}
            onChange={onFieldChange}
          />
        </Col>
      </Row>
    </Container>
  )
})

export default LocalVarField