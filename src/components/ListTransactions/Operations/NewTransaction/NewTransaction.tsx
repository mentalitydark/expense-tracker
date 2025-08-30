import { EnterEvent } from '../../../../utils'
import Modal from '../../../Modal'
import { TextField } from '../../../TextField'

import { useNewTransaction } from './useNewTransaction'

export function NewTransaction() {
  const { refs, submit, openForm, formOpened, closeForm } = useNewTransaction()

  return (
    <>
      <button onClick={openForm}><i className='fa-solid fa-plus' /></button>
      <Modal.Root opened={formOpened} closeModal={closeForm}>
        <Modal.Header>
          <div className='d-flex row justify-between items-center'>
            <Modal.Title value='Adicionar'/>
            <button className='close-button' onClick={closeForm}><i className='fa-solid fa-times' /></button>
          </div>
        </Modal.Header>
        <Modal.Content>
          <div className='d-flex column'>
            <TextField
              id='description'
              label='Descrição'
              ref={refs.description}
              onKeyDown={EnterEvent(submit)}
            />
            <TextField
              id='value'
              label='Valor'
              ref={refs.value}
              onKeyDown={EnterEvent(submit)}
              type='number'
            />
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className='d-flex row justify-end'>
            <Modal.Action action={closeForm} cancel>Cancelar</Modal.Action>
            <Modal.Action action={submit}>Enviar</Modal.Action>
          </div>
        </Modal.Footer>
      </Modal.Root>
    </>
  )
}
