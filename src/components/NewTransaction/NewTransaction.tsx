import { EnterEvent } from '../../utils'

import { useNewTransaction } from './useNewTransaction'

export function NewTransaction() {
  const { refs, submit, openForm, formOpened, closeForm } = useNewTransaction()

  return (
    <div id='new-transaction' className={`${formOpened ? 'form-opened' : ''}`}>
      <div className='front'>
        <button id='open-form' onClick={openForm}>Adicionar</button>
      </div>
      <div className='back'>
        <input
          id='description'
          ref={refs.description}
          type='text'
          placeholder='Descrição'
          onKeyDown={EnterEvent(submit)}
        />
        <input
          id='value'
          ref={refs.value}
          type='number'
          placeholder='Valor'
          onKeyDown={EnterEvent(submit)}
        />
        <div id='actions'>
          <button onClick={closeForm} id='button-cancel'><i className='fa-solid fa-times' /></button>
          <button onClick={submit} id='button-submit'><i className='fa-solid fa-plus' /></button>
        </div>
      </div>
    </div>
  )
}
