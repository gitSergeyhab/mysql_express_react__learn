import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { BrandModal } from "../../components/modals/brand-modal";
import { DeviceModal } from "../../components/modals/device-modal";
import { TypeModal } from "../../components/modals/type-modal";

export const Admin = () => {

    const [showTypeModal, setTypeNodal] = useState(false);
    const [showBrandModal, setBrandNodal] = useState(false);
    const [showDeviceModal, setDeviceNodal] = useState(false);


    return (
        <Container className="d-flex flex-column">
            <Button variant="outline-dark" className="mt-2" onClick={() => setTypeNodal(true)}>Add Type</Button>
            <Button variant="outline-dark" className="mt-2" onClick={() => setBrandNodal(true)}>Add Brand</Button>
            <Button variant="outline-dark" className="mt-2" onClick={() => setDeviceNodal(true)}>Add Device</Button>
            <TypeModal onHide={()=> setTypeNodal(false)} show={showTypeModal}/>
            <BrandModal onHide={()=> setBrandNodal(false)} show={showBrandModal}/>
            <DeviceModal onHide={()=> setDeviceNodal(false)} show={showDeviceModal}/>
        </Container>
    )
}