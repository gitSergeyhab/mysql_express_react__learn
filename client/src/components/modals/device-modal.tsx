import { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Context } from "../..";
import { BrandType, TypeType } from "../../types/types";



const InfoItem = ({removeInfo} : {removeInfo : () => void}) => {
  return (
    <Row>
      <Col md={4} className="my-1">
        <Form.Control placeholder="enter property name"/>
      </Col>
      <Col md={4} className="my-1">
        <Form.Control placeholder="enter property description"/>
      </Col>
      <Col md={4} className="my-1">
        <Button variant="outline-danger" onClick={removeInfo}>Delete</Button>
      </Col>
    </Row>
  )
}

export type ModalProps = { show: boolean, onHide: () => void };

export const DeviceModal = ({ show, onHide } : ModalProps ) => {

  const { device } = useContext(Context);

  const [info, setInfo] = useState<any[]>([]);

  const addInfo = () => setInfo([...info, { title: '', description: '', number: Date.now() }])
  const removeInfo = (number: number) => {
    const newInfo = info.filter((item) => item.number !== number);
    setInfo(newInfo)
  }


  const storeTypes: TypeType[] = device.types;
  const storeBrands: BrandType[] = device.brands;

  const dropdownTypes = storeTypes.map((item) => <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>);
  const dropdownBrands = storeBrands.map((item) => <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>);
  const infoItems = info.map((item) => <InfoItem removeInfo={() => removeInfo(item.number)} key={item.number}/>)


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
            Add a new device
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Dropdown>
                <Dropdown.Toggle className="my-1">Select Type of device</Dropdown.Toggle>
                <DropdownMenu> { dropdownTypes } </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className="my-1">Select Brand of device</Dropdown.Toggle>
                <DropdownMenu> { dropdownBrands } </DropdownMenu>
              </Dropdown>
              <Form.Control className="my-1" placeholder="enter a name of device"/>
              <Form.Control className="my-1" type="number" placeholder="enter the price of device"/>
              <Form.Control className="my-1" type="file"/>
              <hr/>
              <Button variant="outline-dark" onClick={addInfo}>Add a new property</Button>
              {infoItems}

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>Add Device</Button>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }