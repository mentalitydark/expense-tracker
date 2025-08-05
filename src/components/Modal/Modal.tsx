import type { PropsWithChildren } from 'react'

interface IModalProps {
  closeModal: () => void
  opened: boolean
}

export function Modal({ children, closeModal, opened }: PropsWithChildren<IModalProps>) {
  return (
    <>
    {
      opened &&
      <div className='modal' onClick={closeModal}>
        <main className='dialog' onClick={e => e.stopPropagation()}>
          { children }    
        </main>
      </div>
    }
    </>
  )
}
