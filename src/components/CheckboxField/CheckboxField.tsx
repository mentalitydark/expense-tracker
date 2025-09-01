import { forwardRef } from 'react'

import type { CheckboxFieldProps, CheckboxFieldRef } from './checkboxField.types'

import { useChecboxField } from './useCheckboxField'

const CheckboxField = forwardRef<CheckboxFieldRef, CheckboxFieldProps>((props, ref) => {
  const { value, handleChange } = useChecboxField(ref, props.checked)

  return (
    <div className='container-checkboxfield'>
      <input
        type='checkbox'
        name={props.id}
        id={props.id}
        checked={value}
        onChange={handleChange}
        className='input'
      />
      <label htmlFor={props.id} className='label'>{props.label}</label>
    </div>
  )
})

CheckboxField.displayName = 'CheckboxField'

export { CheckboxField }
