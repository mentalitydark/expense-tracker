import type { PropsWithChildren } from 'react'

export function ModalFooter({ children }: PropsWithChildren) {
  return (
    <footer className='footer'>
      { children }
    </footer>
  )
}
