import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buscador } from '../../fun/fun';
import { changeLocal , setUsuarios } from '../../redux/usuariosDuck';


export const NavBar = () => {
    const {local , usuarios , usuariosConst} = useSelector(state => state.usuarios)
    const dispatch = useDispatch();

    // obtenemos los datos del input y cambiamos el reducer general y mantenemos el constante 
    const handleChange = ( { target:{value} } )=> {
        console.log(value)
        dispatch(
            setUsuarios( 
                buscador(usuariosConst , value) 
            )
        )
        console.log( buscador(usuarios , value) )
    }

    const handleClick = ()=> {
        dispatch(
            changeLocal(!local)
        )
    }

    useEffect(() => {
        buscador(usuarios , 'tel')
    }, [])
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-green">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    
                </ul>
                
                <ul className="navbar-nav">
                <li className="nav-link">Numero de empleados : {usuarios.length}</li>
                <li className="nav-link">Moneda : {
                    local ? 'USD' : 'MXN'
                }</li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cambio</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <button className="dropdown-item cambioMoneda" 
                            onClick={handleClick} 
                    >{
                        local ? (`Pesos `):(`Dolares`)
                    }
                    </button>
                </div>
            </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input 
                        className="form-control mr-sm-2" 
                        type="text"
                        onChange={(e)=>handleChange(e)} 
                        placeholder="Buscar" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
        </nav>

    )
}
