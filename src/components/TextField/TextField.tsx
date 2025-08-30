import React, { useState, type ChangeEvent } from 'react'

interface Props {
  label: string
  id: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  type?: 'text' | 'number'
  autofocus?: boolean
  value?: string
}

const TextField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [value, setValue] = useState<string>(props.value || '')

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    switch (props.type) {
      case 'number': {
        const rawValue = event.target.value.replace(/[^\d]/g, '')
        setValue((Number(rawValue)/100).toLocaleString('pt-br', {
          currency: 'BRL',
          minimumFractionDigits: 2, maximumFractionDigits: 2
        }))
        break
      }
      case 'text':
      default: {
        setValue(event.target.value)
      }
    }
  }

  return (
    <div className='container-textfield'>
      <input
        ref={ref}
        type='text'
        className='input'
        name={props.id}
        id={props.id}
        value={value}
        onChange={onChangeHandle}
        onKeyDown={props.onKeyDown}
        autoFocus={props.autofocus}
        data-raw-value={props.type === 'number' ? value.replace(/[^\d]/g, '') : value}
      />
      <label className='label' htmlFor={props.id}>{props.label}</label>
    </div>
  )
})

TextField.displayName = 'TextField'

export {
  TextField
}
