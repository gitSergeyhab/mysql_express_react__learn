import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import bigStar from '../../assets/big-star.png';

export const DevicePage = () => {
    const device =  { id: 1, name: 'Samsung 1', price: 11111, rating: 4, img: 'https://picsum.photos/id/237/200/300', info: [
        {id: 1, title: 'Samsung 1 title', description: 'Samsung 1 - description description'},
        {id: 2, title: ' 2 title', description: 'Samsung 2 - description description'},
        {id: 3, title: 'Samsung 1 title', description: 'Samsung 1 -  description'},
    ] };

    const infoItems = device.info.map((info, index) =>
        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
        </Row>
        )
        

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Characteristic</h1>
                {infoItems}
            </Row>
        </Container>
    )
}