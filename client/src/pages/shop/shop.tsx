import { Col, Container, Row } from "react-bootstrap"
import { BrandBar } from "../../components/brand-bar/brand-bar"
import { DeviceList } from "../../components/device-list/device-list"
import { TypeBar } from "../../components/type-bar/type-bar"

export const Shop = () => {
    return (
        <Container> 
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
}