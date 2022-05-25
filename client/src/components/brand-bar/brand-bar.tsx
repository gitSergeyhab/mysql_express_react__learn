import { Card, Col, Row } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import { useContext } from "react";
import { Context } from "../..";
import { BrandType } from "../../types/types";

export const BrandBar = observer(() => {

    const { device } = useContext(Context);
    const storeBrands: BrandType[] = device.types;

    const brands = storeBrands.map((item) => 
        <Card 
            
            // active={ item.id === device._selectedBrand.id }
            key={ item.id }  
            className="my-1 "
            onClick={() => device.setSelectedBrand(item)}
            style={{ cursor: 'pointer', width: 'min-content' }}
            border={ item.id === device._selectedBrand.id ? 'danger' : 'light' }
        >
            {item.name}
        </Card>
        )
    return (
        <Row  className="d-flex mt-2">
            { brands }
        </Row>
    )
})