import React from 'react'
import Grid from 'material-ui/Grid'
import LocalVarSortable from './LocalVarSortable'
import AddLocalVarButton from './AddLocalVarButton'

const LocalVarContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={10}>
            <h2>Local Variables</h2>
        </Grid>
        <Grid item xs={2}>
            <AddLocalVarButton
              onClick={onClick}
            />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LocalVarSortable 
          items={items}
          onChange={onChange}
          onSortEnd={onSortEnd}
          onRemove={onRemove}
        />
      </Grid>
    </div>
  )
}

export default LocalVarContainer