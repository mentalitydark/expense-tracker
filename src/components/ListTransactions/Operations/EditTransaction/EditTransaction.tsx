import { EnterEvent } from "../../../../utils";
import Modal from "../../../Modal";
import { useEditTransaction } from "./useEditTransaction";

export function EditTransaction() {
  const { form, enabled } = useEditTransaction()

  return (
      <>
        <button onClick={form.open} disabled={!enabled}><i className='fa-solid fa-pen-to-square' /></button>
        <Modal.Root opened={form.opened} closeModal={form.close}>
          <Modal.Header>
            <div className='d-flex row justify-between items-center'>
              <Modal.Title value='Editar'/>
              <button className='close-button' onClick={form.close}><i className='fa-solid fa-times' /></button>
            </div>
          </Modal.Header>
          <Modal.Content>
            <div className='d-flex column'>
              <div className='input-container'>
                <label htmlFor="description">Descrição</label>
                <input
                  id='description'
                  name='description'
                  ref={form.fields.description}
                  type='text'
                  onKeyDown={EnterEvent(form.submit)}
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
                  ref={form.fields.value}
                  type='number'
                  onKeyDown={EnterEvent(form.submit)}
                  autoComplete='off'
                />
              </div>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <div className='d-flex row justify-end'>
              <Modal.Action action={form.close} cancel>Cancelar</Modal.Action>
              <Modal.Action action={form.submit}>Enviar</Modal.Action>
            </div>
          </Modal.Footer>
        </Modal.Root>
      </>
    )
  }
  