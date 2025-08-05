import type { PropsWithChildren } from 'react'

export function ModalHeader({ children }: PropsWithChildren) {
  return (
    <header className='header'>
      { children }
    </header>
  )
}
