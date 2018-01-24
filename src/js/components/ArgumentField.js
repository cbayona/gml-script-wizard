import React from 'react'
import '../../styles/fields.css'
import { SortableElement } from 'react-sortable-hoc'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const ArgumentField = SortableElement( ({ index, id, value, onChange }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    onChange(newArg, id)
  }

  return (
    <div className='argument-field'>
      <form>
        <FormGroup>
          <ControlLabel>Argument{id}</ControlLabel>
          <FormControl
            type="text"
            value={value}
            onChange={onFieldChange}
          />
        </FormGroup>
      </form>
    </div>
  )
})

export default ArgumentField