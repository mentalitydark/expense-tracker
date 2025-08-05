import type { KeyboardEvent, KeyboardEventHandler } from 'react'

export function EnterEvent(callback: CallableFunction): KeyboardEventHandler<HTMLInputElement> {
  return function (event: KeyboardEvent) {
    if (event.key === 'Enter') {
      callback()
    }
  }
}

