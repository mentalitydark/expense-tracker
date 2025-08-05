import type { PropsWithChildren } from 'react'

interface IModalActionProps {
  action: () => void
  cancel?: boolean
}

export function ModalAction({ children, action, cancel = false }: PropsWithChildren<IModalActionProps>) {
  return (
    <button className={`action ${cancel ? 'danger' : ''}`} onClick={action}>{ children }</button>
  )
}
