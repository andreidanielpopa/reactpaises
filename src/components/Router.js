import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import DetallePais from './DetallePais';
import SeleccionarContinente from './SeleccionarContinente';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SeleccionarContinente />} />
                    <Route path='/detalle' element={<DetallePais/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
