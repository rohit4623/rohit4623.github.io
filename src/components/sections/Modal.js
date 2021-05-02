import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

export function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

const ModalComponent = (dimmer, open) => {

    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: true,
        dimmer: "blurring",
    })
    // const { open, dimmer } = state;

    const validate = () => {
        dispatch({type: 'CLOSE_MODAL'});
    }

  return (
    <div>

      <Modal
        dimmer={dimmer}
        open={open}
      >
        <Modal.Header>header</Modal.Header>
        <Modal.Content>
          
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => validate()}>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default ModalComponent