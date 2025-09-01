import { forwardRef } from 'react'

import type { NumberFieldProps, NumberFieldRef } from './numberFields.types'

import { useNumberField } from './useNumberField'

const NumberField = forwardRef<NumberFieldRef, NumberFieldProps>((props, ref) => {
  const { inputValue, handleChange } = useNumberField(ref)

  return (
    <div className='container-textfield'>
      <input
        type='text'
        className={`input ${props.className ?? ''}`}
        id={props.id}
        value={inputValue}
        onChange={handleChange}
        inputMode='decimal'
        autoComplete='off'
      />
      <label className='label' htmlFor={props.id}>{props.label}</label>
    </div>
  )
})

NumberField.displayName = 'NumberField'

export {
  NumberField
}
