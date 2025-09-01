import { forwardRef } from 'react'

import type { TextFieldProps, TextFieldRef } from './textField.types'

import { useTextField } from './useTextField'

const TextField = forwardRef<TextFieldRef, TextFieldProps>((props, ref) => {
  const { inputValue, handleChange, inputRef } = useTextField(ref)

  return (
    <div className='container-textfield'>
      <input
        ref={inputRef}
        type='text'
        className={`input ${props.className ?? ''}`}
        name={props.id}
        id={props.id}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={props.onKeyDown}
        autoFocus={props.autofocus}
      />
      <label className='label' htmlFor={props.id}>{props.label}</label>
    </div>
  )
})

TextField.displayName = 'TextField'

export {
  TextField
}
