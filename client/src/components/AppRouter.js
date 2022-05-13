import React, {useContext} from 'react';
import {Routes, Route, Redirect} from "react-router-dom";
import {publicRoutes, authRoutes} from "../routes";
import {SHOP_ROUTE} from "../utlis/consts";
import Shop from "../pages/Shop";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Shop/>}/>
        </Routes>
    );
};

export default AppRouter;