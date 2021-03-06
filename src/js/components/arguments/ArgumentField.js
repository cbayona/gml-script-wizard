import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card'
import DragHandle from '../DragHandle'

import '../../../styles/list-field.css'

const ArgumentField = SortableElement( (props) => {
  let { id, name, onChange, onOpen } = props

  const onClick = (event) => {
    event.stopPropagation()
  }

  const onFieldChange = (event) => {
    let newArg = event.target.value
    let key = event.target.id
    onChange(id, key, newArg)
  }

  const onDialogOpen = () => {
    onOpen(id);
  }

  return (
    <Card>
      <div className="field-root">
        <div className="field-drag-handle">
          <DragHandle/>
        </div>
        <div className="field-textfield">
          <TextField
            id="name"
            placeholder={'unused'}
            value={name}
            onClick={onClick}
            onChange={onFieldChange}
            fullWidth
          />
        </div>
        <div className="field-button">
          <IconButton onClick={onDialogOpen}>
            <Icon>mode_edit</Icon>
          </IconButton>
        </div>
      </div>
    </Card>
  )
})

export default ArgumentField