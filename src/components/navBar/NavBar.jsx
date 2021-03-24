import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeLocal } from '../../redux/usuariosDuck';


export const NavBar = () => {
    const {local} = useSelector(state => state.usuarios)
    const dispatch = useDispatch();

    const handleChange = ( { target:{value} } )=> {
        console.log(value)
    }

    const handleClick = ()=> {
        dispatch(
            changeLocal(!local)
        )
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-green">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input 
                        className="form-control mr-sm-2" 
                        type="text"
                        onChange={(e)=>handleChange(e)} 
                        placeholder="Buscar" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
                </form>
                <ul className="navbar-nav">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cambio</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <button className="dropdown-item cambioMoneda" 
                            onClick={handleClick} 
                    >{
                        local ? (`Pesos `):(`Dolares`)
                    }
                    </button>
                    <a className="dropdown-item" href="#">Action 2</a>
                </div>
            </li>
                </ul>
            </div>
        </nav>

    )
}
