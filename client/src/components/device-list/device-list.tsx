import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { Context } from "../..";
import { DeviceType } from "../../types/types";
import src from '../../assets/star.svg'

const DeviceItem = ({device} : {device: DeviceType}) => {

    const { id, img, name, price, rating } = device;

    return (
        <Col md={6} xs={12} xl={3}>
            <Card style={{ width: 150, cursor: 'pointer' }} className="d-flex justify-content-center">
                <Image src={img} height={150} width={150}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div> { name } </div>
                    <div> { rating } <Image src={src} width={12}/></div>
                   
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div> Price: </div>
                    <div>{ price } rub</div>
                </div>

            </Card>
        </Col>
    )
}

export const DeviceList = observer(() => {

    const { device } = useContext(Context);

    const storeDevices: DeviceType[] = device.devices;

    const deviceItems = storeDevices.map((item) => <DeviceItem key={item.id} device={item}/>)
    return (
        <Row>
            { deviceItems }
        </Row>
    )
})