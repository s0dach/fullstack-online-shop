import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar, NavLink, Button} from "react-bootstrap";
import {SHOP_ROUTE} from "../utlis/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}>s0dach shop</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto">
                    <Button variant={"outline-light"}>Выйти</Button>
                    <Button variant={"outline-light"}>Админка</Button>
                </Nav>
                :
                <Nav className="ms-auto">
                    <Button variant={"outline-light"} onClick={()=> user.setIsAuth(true)}>Авторизация</Button>
                </Nav>

            }
        </Container>
        </Navbar>
    );
});

export default NavBar;