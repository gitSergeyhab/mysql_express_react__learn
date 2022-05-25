import { ListGroup } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import { useContext } from "react";
import { Context } from "../..";
import { TypeType } from "../../types/types";

export const TypeBar = observer(() => {

    const { device } = useContext(Context);
    const storeTypes: TypeType[] = device.types;

    const types = storeTypes.map((item) => 
        <ListGroup.Item 
            active={ item.id === device._selectedType.id }
            key={item.id}  
            className="my-1"
            onClick={() => device.setSelectedType(item)}
            style={{ cursor: 'pointer' }}
        >
            {item.name}
        </ListGroup.Item>
        )
    return (
        <ListGroup  className="mt-2" style={{ width: '100%' }}>
            { types }
        </ListGroup>
    )
})