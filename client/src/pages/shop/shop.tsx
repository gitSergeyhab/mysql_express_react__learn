import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Context } from "../.."
import { BrandBar } from "../../components/brand-bar/brand-bar"
import { DeviceList } from "../../components/device-list/device-list"
import { Pages } from "../../components/pages/pages"
import { TypeBar } from "../../components/type-bar/type-bar"
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/device-api"
import { TypeType } from "../../types/types"

export const Shop = observer (() => {

    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
        fetchBrands().then((data) => device.setBrands(data));
        fetchDevices({ brandId: null, limit: 2, page: 1, typeId: null }).then((data) => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count)
        });
    }, []);

    useEffect(() => {
        fetchDevices({
            brandId: device.selectedBrand.id,
            typeId: device.selectedType.id,
            limit: device.limit, 
            page: device.page, 
        }).then((data) => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count)
        });
    }, [device.page, device.selectedBrand, device.selectedType])

    return (
        <Container> 
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})