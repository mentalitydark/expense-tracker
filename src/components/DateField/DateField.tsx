import { forwardRef } from 'react'

import type { DateFieldProps, DateFieldRef } from './dateField.types'

import { useDateField } from './useDateField'

const DateField = forwardRef<DateFieldRef, DateFieldProps>((props, ref) => {
  const { handleChange, date } = useDateField(ref)

  return (
    <div className='container-datefield'>
      <input
        className='input'
        type='date'
        name={props.id}
        id={props.id}
        value={date}
        onChange={handleChange}
        onKeyDown={props.onKeyDown}
        />
      <label className='label' htmlFor={props.id}>{props.label}</label>
    </div>
  )
})

DateField.displayName = 'DateField'

export {
  DateField
}
