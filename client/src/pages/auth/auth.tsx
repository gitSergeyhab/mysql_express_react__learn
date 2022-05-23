import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { AppRoute } from "../../App"

export const Auth = () => {
    
    return (
        <Container className="d-flex justify-content-center align-items-center py-5">
            <Card style={{ width: '50%',  minWidth: '400px' }} className="p-5">
                <h2 style={{ margin: 'auto' }}>Authorization</h2>
                <Form className="d-flex flex-column">
                    <Form.Control placeholder="Email" className="mt-3" />
                    <Form.Control placeholder="Password" className="mt-3" />

                    <Row className="d-flex justify-content-between align-items-center p-3 pb-0">
                        <div style={{ width: '50%'}}>No account? <NavLink to={AppRoute.Registration}>Registration</NavLink></div>
                    <Button variant={'outline-primary'} style={{ width: '50%'}}> Enter </Button>

                    </Row>
                    


                </Form>
            </Card>
        </Container>
    )
}