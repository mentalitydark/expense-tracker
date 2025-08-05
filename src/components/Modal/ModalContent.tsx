import type { PropsWithChildren } from 'react'

export function ModalContent({ children }: PropsWithChildren) {
  return (
    <div className='content'>
      { children }
    </div>
  )
}
