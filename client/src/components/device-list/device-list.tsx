import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { Card, Col, Image, Row } from "react-bootstrap";
import { Context } from "../..";
import { DeviceType } from "../../types/types";
import src from '../../assets/star.svg';

const DeviceItem = ({device} : {device: DeviceType}) => {

    const { id, img, name, price, rating } = device;
    const navigate = useNavigate();

    const handleCardClick = () => navigate(`/device/${id}`);

    return (
        <Col md={6} xs={12} xl={3}>
            <Card 
                style={{ width: 150, cursor: 'pointer' }}
                className="d-flex justify-content-center mt-3"
                onClick={handleCardClick}
            >
                <Image src={ `${process.env.REACT_APP_API_URL}${img}` } height={150} width={150}/>
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