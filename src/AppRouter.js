import React from 'react';
import MainPage from "./pages/MainPage/MainPage";
import InvoicePage from "./pages/InvoicePage/InvoicePage";
import {Route, Routes} from "react-router-dom";
import MapPage from "./pages/MapPage/MapPage";

const routes = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/invoice',
        element: <InvoicePage/>
    },
    {
        path: '/map',
        element: <MapPage/>
    }

]

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {
                    routes.map(el =>
                        <Route path={el.path} element={el.element} key={el.path}/>
                    )
                }
            </Routes>
        </div>
    );
};

export default AppRouter;