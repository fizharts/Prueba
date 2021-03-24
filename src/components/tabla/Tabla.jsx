import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatoNumero } from '../../fun/fun'
import { setUsuarios } from '../../redux/usuariosDuck'

const Tabla = () => {
    const { usuarios , local } = useSelector(state => state.usuarios)
    const dispatch = useDispatch()

    useEffect(() => {

    },[])

    const editar = ( {target:{dataset:{id}}} )=> {
        
        
        let filtrado = usuarios.filter(u => u.id === parseInt(id))
        console.log( parseInt(id) )
        console.log( filtrado[0] )
    
    }

    const borrar = ( {target:{dataset:{id}}} )=> {
        let filtrado = usuarios.filter(u => u.id !== parseInt(id))
        console.log(filtrado)
        dispatch(
            setUsuarios(
                filtrado
            )
        )

    }

    return (
        <fragment classname="justify-content-center">
            <h2 className="mt-5">Control de usuarios</h2>
            <table className="table table-striped mt-5  table-hover">
                <thead className=" thead-green ">
                    <tr>
                        <th>Id</th>
                        <th>Nombre completo</th>
                        <th>Empresa</th>
                        <th>Salario</th>
                        <th>imagen</th>
                        <th className="">
                            <button className="btn btn-outline-light btn-sm "
                                     data-toggle="modal" 
                                     data-target="#modelId"
                            >Agregar +</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
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
                                <td style={
                                    salario < 10000 ? (
                                        {
                                            color:'red'
                                        }
                                    ):(
                                        {
                                            color:'green'
                                        }
                                    )
                                }>
                                { 
                                    local ? (formatoNumero(salario / 21.5 , 'en-US'))
                                            :(formatoNumero(salario , 'es-MX'))
                                }
                                </td>
                                <td>{imagen}</td>
                                <td >
                                    <button className="btn btn-sm btn-editar" 
                                            data-id={id} 
                                            onClick={(e)=>editar(e)}
                                            >Editar
                                    </button>
                                    <button className="btn btn-sm btn-borrar"
                                            data-id={id}
                                            onClick={(e)=>borrar(e)}
                                            >Borrar
                                    </button>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div>

        <div className="modal fade" id="modelId" 
            tabIndex={-1} role="dialog" 
            aria-labelledby="modelTitleId" 
            aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Agregar Usuario</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
                    <form className="form">
                        <div className="form-grup ">
                            <label className="label label-default ">Nombre</label>
                            <input type="text" className="form-control "/>
                        </div>
                        <div className="form-grup">
                            <label className="label label-default">Apellido Paterno</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-grup">
                            <label className="label label-default">Apellido Materno</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-grup">
                            <label className="label label-default">Empresa</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-grup">
                            <label className="label label-default">Salario</label>
                            <input type="number" className="form-control"/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
                </div>
            </div>
            </div>
        </div>
        </div>

        </fragment>

    )
}



export default Tabla
