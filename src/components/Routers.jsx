import React from 'react';
import Catalog from './catalog/Catalog';
import Main from './main/Main';
import ProductDescription from './productDescription/ProductDescription';
import {
    Routes,
    Route
} from "react-router-dom";


export const PATH = {
    CATALOG: '/catalog',
    ProductDescription: '/productDescription',
    MainPage: '/Main'
}


function Routers() {

    return (
        <>
                <Routes>
                    <Route path={'/'} element={<Main/>} />
                    <Route path={PATH.CATALOG} element={<Catalog/>} />
                    <Route path={PATH.ProductDescription} element={<ProductDescription/>} />
                    <Route path={PATH.MainPage} element={<Main/>} />
                </Routes>
        </>
    )
}

export default Routers;