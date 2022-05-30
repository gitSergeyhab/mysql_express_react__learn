import { ChangeEventHandler, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/device-api";

export type ModalProps = { show: boolean, onHide: () => void }

export const TypeModal = ({ show, onHide } : ModalProps ) => {

  const [name, setName] = useState('');

  const handleAddType = () => {
    createType({ name })
      .then(() => {
        setName('');
        onHide();
      })
  }

  const handleTypeChange: ChangeEventHandler<HTMLInputElement> = (evt) => setName(evt.currentTarget.value)
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
                <Form.Control 
                  placeholder="Enter a new type"
                  onChange={handleTypeChange}
                  value={name}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleAddType}>Add</Button>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }