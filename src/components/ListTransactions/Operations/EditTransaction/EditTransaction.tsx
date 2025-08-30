import { EnterEvent } from "../../../../utils";
import Modal from "../../../Modal";
import { TextField } from "../../../TextField";
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
              <TextField
                id='description'
                label='Descrição'
                ref={form.fields.description}
                onKeyDown={EnterEvent(form.submit)}
              />
              <TextField
                id='value'
                label='Valor'
                ref={form.fields.value}
                onKeyDown={EnterEvent(form.submit)}
                type='number'
              />
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
  