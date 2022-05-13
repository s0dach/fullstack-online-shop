import React from 'react';
import {Card, Container, Form, Button, Row, NavLink} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utlis/consts";

const Auth = () => {
    return (
        <Container
        className={"d-flex justify-content-center align-items-center"}
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600, }} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-2"
                    placeholder="введите E-mail"
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="введите пароль"
                    />
                    <Row className="d-flex justify-content-between mt-3 ps-3" >
                        <div>Нет аккаунта? <NavLink to='/registration'>Регистрация</NavLink>
                        </div>
                        <Button>Войти</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;