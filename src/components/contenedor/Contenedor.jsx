import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsuarios } from '../../redux/usuariosDuck'
import { NavBar } from '../navBar/NavBar'
import Tabla from '../tabla/Tabla'

export const Contenedor = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(
            getUsuarios()
        )
    } , [dispatch])
    return (
        <Fragment>
            <NavBar/>
            <div className="container">
            <Tabla />
                
            </div>
        </Fragment>
    )
}
