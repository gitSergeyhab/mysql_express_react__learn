import { Button, Form, Modal } from "react-bootstrap";

export type ModalProps = { show: boolean, onHide: () => void }

export const TypeModal = ({ show, onHide } : ModalProps ) => {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a new type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control placeholder="Enter a new type"/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>Add</Button>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }