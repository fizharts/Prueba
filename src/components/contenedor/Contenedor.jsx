import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsuarios } from '../../redux/usuariosDuck'
import { NavBar } from '../navBar/NavBar'
import Tabla from '../tabla/Tabla'

export const Contenedor = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(
            getUsuarios()
        )
    } , [])
    return (
        <Fragment>
            <NavBar/>
            <div class="container">
            <Tabla />
                
            </div>
        </Fragment>
    )
}
