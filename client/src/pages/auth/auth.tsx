import { observer } from "mobx-react-lite";
import { ChangeEventHandler, useContext, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Context } from "../..";
import { AppRoute } from "../../App"
import { login, registration } from "../../http/user-api";

export const Auth = observer (() => {

    const { user } = useContext(Context)
    const location = useLocation();
    const navigation = useNavigate()
    const isLogin = location.pathname === AppRoute.Login;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (evt) => setEmail(evt.currentTarget.value);
    const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (evt) => setPassword(evt.currentTarget.value);



    const handleAuthBtnClick = async() => {
        try {
            let data;
            if (isLogin) {
                data = await login({ email, password });
                console.log(data)
            } else {
                data = await registration({ email, password });
            }
    
            user.setUser(data);
            user.setIsAuth(true);
            console.log(user)
            navigation(AppRoute.Shop)
        } catch (err: any) {
            alert(err.response.data.message)
        }

    }
    
    return (
        <Container className="d-flex justify-content-center align-items-center py-5">
            <Card style={{ width: '50%',  minWidth: '400px' }} className="p-5">
                <h2 style={{ margin: 'auto' }}>Authorization</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        placeholder="Email" 
                        className="mt-3"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <Form.Control 
                        placeholder="Password" 
                        className="mt-3" 
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />

                    <Row className="d-flex justify-content-between align-items-center p-3 pb-0">
                        <div style={{ width: '50%'}}>No account? <NavLink to={AppRoute.Registration}>Registration</NavLink></div>
                    <Button
                        variant={'outline-primary'}
                        style={{ width: '50%'}}
                        onClick={handleAuthBtnClick}
                    >

                        { isLogin ? 'Enter': 'Registration' }
                          
                    </Button>

                    </Row>
                    


                </Form>
            </Card>
        </Container>
    )
})