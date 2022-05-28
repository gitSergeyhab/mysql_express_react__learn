import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { AppRoute } from '../../App';


export const NavBarComponent = observer (() => {

    const { user } = useContext(Context);
    const navigate = useNavigate();


    const handleLogoutClick = () => {
        user.setIsAuth(false);
        navigate(AppRoute.Login);
    }

    return (
        <Navbar bg="dark" variant='dark'  expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>
                </Nav>
                {
                    user.isAuth ? 
                    <>
                        <Button className='mx-2' onClick={handleLogoutClick}>Logout</Button>
                        <Button onClick={() => navigate(AppRoute.Admin)}>Admin Panel</Button>
                    </>
                     :
                    <Button onClick={() => user.setIsAuth(true)}>Login</Button>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})