interface IModalTitleProps {
  value: string
}

export function ModalTitle({ value }: IModalTitleProps) {
  return (
    <span className='title'>{ value }</span>
  )
}
