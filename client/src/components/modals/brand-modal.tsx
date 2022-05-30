import { ChangeEventHandler, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/device-api";

export type ModalProps = { show: boolean, onHide: () => void }

export const BrandModal = ({ show, onHide } : ModalProps ) => {


  const [name, setName] = useState('');

  const handleBrandChange: ChangeEventHandler<HTMLInputElement> = (evt) => setName(evt.currentTarget.value)

  const handleAddBrandBtnClick = () => {
    createBrand({ name })
      .then(() => {
        setName('');
        onHide();
      })
    
  } 

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
            Add a new brand
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                  placeholder="Enter a new brand"
                  onChange={handleBrandChange}
                  value={name}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleAddBrandBtnClick}>Add Brand</Button>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }