import { EnterEvent } from '../../../../utils'
import Modal from '../../../Modal'

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
            <div className='input-container'>
              <label htmlFor="description">Descrição</label>
              <input
                id='description'
                name='description'
                ref={refs.description}
                type='text'
                onKeyDown={EnterEvent(submit)}
                className='mb-3'
                autoComplete='off'
                autoFocus
              />
            </div>
            <div className='input-container'>
              <label htmlFor="value">Valor</label>
              <input
                id='value'
                name='value'
                ref={refs.value}
                type='number'
                onKeyDown={EnterEvent(submit)}
                autoComplete='off'
              />
            </div>
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
