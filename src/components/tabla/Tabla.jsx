import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Tabla = () => {
    const { usuarios } = useSelector(state => state.usuarios)

    console.log(usuarios)
    return (
        <fragment classname="justify-content-center">
            <h2 className="mt-5">Control de usuarios</h2>
            <table className="table table-striped mt-5">
                <thead className=" thead-green">
                    <tr>
                        <th>Id</th>
                        <th>Nombre completo</th>
                        <th>Empresa</th>
                        <th>Salario</th>
                        <th>imagen</th>
                        <th ><button className="btn btn-outline-light">+</button></th>
                    </tr>
                </thead>
                <tbody className="table-striped">
                    {
                        usuarios.map( ({id  , nombre , apellidoPaterno , apellidoMaterno , empresa , salario ,imagen},) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>
                                {
                                    `${nombre} ${apellidoPaterno} ${apellidoMaterno}`
                                }
                                </td>
                                <td>{empresa}</td>
                                <td>{salario}</td>
                                <td>{imagen}</td>
                                <td>
                                    <button className="btn btn-sm btn-editar">Editar</button>
                                    <button className="btn btn-sm btn-borrar">Borrar</button>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </fragment>

    )
}



export default Tabla
