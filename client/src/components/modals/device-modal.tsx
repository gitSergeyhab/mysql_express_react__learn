import { observer } from "mobx-react-lite";
import { ChangeEventHandler, useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Context } from "../..";
import { BrandType, TypeType } from "../../types/types";

type InfoItemProps = {
  changeInfo: (key: string, value: string, number: number) => void,
  removeInfo : () => void, 
  item: { title: string, description: string, number: number }
}

const InfoItem = ({removeInfo, changeInfo, item} : InfoItemProps) => {

  const handleTitleChange: ChangeEventHandler<HTMLInputElement>  = (evt) => 
    changeInfo('title', evt.currentTarget.value, item.number);

  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement>  = (evt) => 
    changeInfo('description', evt.currentTarget.value, item.number);


  return (
    <Row>
      <Col md={4} className="my-1">
        <Form.Control
          placeholder="enter property name" 
          value={item.title}
          onChange={handleTitleChange}
         />
      </Col>
      <Col md={4} className="my-1">
        <Form.Control 
          placeholder="enter property description" 
          value={item.description}
          onChange={handleDescriptionChange}
        />
      </Col>
      <Col md={4} className="my-1">
        <Button variant="outline-danger" onClick={removeInfo}>Delete</Button>
      </Col>
    </Row>
  )
}

export type ModalProps = { show: boolean, onHide: () => void };

export const DeviceModal = observer (({ show, onHide } : ModalProps ) => {

  const [info, setInfo] = useState<any[]>([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState<null | number>(null);
  const [file, setFile] = useState<any>(null);
  const [type, setType] = useState<any>(null);
  const [brand, setBrand] = useState<any>(null);

  

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (evt) => setName(evt.currentTarget.value);
  const handlePriceChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const value = evt.currentTarget.value
    if (value) {
      setPrice(+value);
    } else {
      setPrice(null);
    }
  } 

  const handleFileChange = (evt: any)  => setFile(evt.target.files[0]);


  const { device } = useContext(Context);


  const addInfo = () => setInfo([...info, { title: '', description: '', number: Date.now() }])
  const removeInfo = (number: number) => {
    const newInfo = info.filter((item) => item.number !== number);
    setInfo(newInfo)
  }

  const changeInfo = (key: string, value: string, number: number) => {
    const newInfo = info.map((item) => item.number === number ? { ...item, [key]: value } : item)
    setInfo(newInfo)
  }

  const handleAddDevice = () => {
    console.log(info)
  }


  const storeTypes: TypeType[] = device.types;
  const storeBrands: BrandType[] = device.brands;



  const dropdownTypes = storeTypes.map((item) => 
    <Dropdown.Item onClick={() => device.setSelectedType(item)} key={item.id}>
      {item.name}
    </Dropdown.Item>
    );
  const dropdownBrands = storeBrands.map((item) => 
    <Dropdown.Item onClick={() => device.setSelectedBrand(item)} key={item.id}>
      {item.name}
    </Dropdown.Item>
    );
  const infoItems = info.map((item) => <InfoItem item={item} changeInfo={changeInfo} removeInfo={() => removeInfo(item.number)} key={item.number}/>)


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
                <Dropdown.Toggle className="my-1">
                  { device.selectedType.name || 'Select Type of device' }
                </Dropdown.Toggle>
                <DropdownMenu> { dropdownTypes } </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className="my-1">
                  { device.selectedBrand.name || 'Select Brand of device' }
                </Dropdown.Toggle>
                <DropdownMenu> { dropdownBrands } </DropdownMenu>
              </Dropdown>
              <Form.Control 
                className="my-1" placeholder="enter a name of device"
                value={name}
                onChange={handleNameChange}

              />
              <Form.Control 
                className="my-1" type="number" placeholder="enter the price of device"
                value={price ? price : ''}
                onChange={handlePriceChange}
              />
              <Form.Control 
                className="my-1" type="file"
                onChange={handleFileChange}
              />
              <hr/>
              <Button variant="outline-dark" onClick={addInfo}>Add a new property</Button>
              {infoItems}

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleAddDevice}>Add Device</Button>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  })