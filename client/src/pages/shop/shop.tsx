import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Context } from "../.."
import { BrandBar } from "../../components/brand-bar/brand-bar"
import { DeviceList } from "../../components/device-list/device-list"
import { TypeBar } from "../../components/type-bar/type-bar"
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/device-api"
import { TypeType } from "../../types/types"

export const Shop = observer (() => {

    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
        fetchBrands().then((data) => device.setBrands(data));
        fetchDevices().then((data) => device.setDevices(data.rows));

    }, [])
    // const storeTypes: TypeType[] = device.types

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
})