import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { formatoNumero } from '../../fun/fun'
import { setUsuarios , setUsuariosConst } from '../../redux/usuariosDuck'

const Tabla = () => {
    const { usuarios , local } = useSelector(state => state.usuarios)
    const dispatch = useDispatch()
    
    const [agregarUsuario, setAgregarUsuario] = useState({

            id : usuarios.length,	
            nombre : '',
            apellidoPaterno : '',
            apellidoMaterno : '',
            salario : 0,
            empresa : '',
            imagen : ''

    })

    const [editarUsuario, setEditarUsuario] = useState({
            id:0,
            nombre : '',
            apellidoPaterno : '',
            apellidoMaterno : '',
            empresa : '',
            salario : 0,
            imagen : ''
    })



    useEffect(() => {

    },[])

    const editar = ( {target:{dataset:{id}}} )=> {
        let filtrado = usuarios.filter(u => u.id === parseInt(id))  
        setEditarUsuario( ...filtrado )

    }

    // busca en el arreglo por id y guarda con redux el nuevo arreglo
    const borrar = ( {target:{dataset:{id}}} )=> {

            Swal.fire({
                title: 'Estas seguro?',
                text: "Esta accion no se puede deshacer",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'si, quiero borrar!'
              }).then((result) => {
                if (result.value) {
                    let filtrado = usuarios.filter(u => u.id !== parseInt(id))
                    console.log(filtrado)
                    dispatch(
                        setUsuarios(
                            filtrado
                        )
                    )
                  Swal.fire(
                    'Borrado!',
                    'Este usuario fue eliminado',
                    'success'
                  )
                }
              })
     

    }

    const handleChange = ({target:{name , value}})=> {
        
        setAgregarUsuario({
            ...agregarUsuario,
            [name] : value,
            id: (usuarios.length+1)
        })

    }   
    
    const handleChangeEditar = ({target:{name , value}})=> {
        
        setEditarUsuario({
            ...editarUsuario,
            [name] : value,
        })

    }



    const handleSubmit = ( e )=> {
        e.preventDefault()
        
        dispatch(
            setUsuarios([
                ...usuarios ,
                agregarUsuario
                
            ])
        )
        dispatch(
            setUsuariosConst([
                ...usuarios ,
                agregarUsuario
            ])
        )
        

    }

    const handleSubmitEdit = ( e )=> {
        e.preventDefault()
        let borrado = usuarios.filter(u => u.id !== parseInt(editarUsuario.id)) 
        let nuevo = [
            ...borrado,
            {...editarUsuario}
        ] 
        nuevo.sort((a,b)=> a.id -b.id)
        
            console.log(nuevo)

            dispatch(
                setUsuarios([
                   
                    ...nuevo
                    
                ])
            )
            dispatch(
                setUsuariosConst([
                    ...nuevo
                ])
            )
        
      
        
    }

    const agregar = ()=> {
        setAgregarUsuario({

            id : usuarios.length,	
            nombre : '',
            apellidoPaterno : '',
            apellidoMaterno : '',
            salario : 0,
            empresa : '',
            imagen : ''

    })
    }

    return (
        <fragment classname="justify-content-center">
            <h2 className="mt-5">Control de usuarios</h2>
            <table className="table  mt-5  ">
                <thead className=" thead-green ">
                    <tr>
                        <th>Id</th>
                        <th>Nombre completo</th>
                        <th>Empresa</th>
                        <th className="text-right">Salario</th>
                        <th className="text-right" >imagen</th>
                        <th className="text-right">
                            <button className="btn btn-outline-light btn-sm "
                                     data-toggle="modal" 
                                     data-target="#modelId"
                                     onClick={agregar}
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
                                <td className="text-right" style={
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
                                    local ? (formatoNumero(salario / 21.5 ))
                                            :(formatoNumero(salario ))
                                }
                                </td>
                                <td className="text-right">{imagen}</td>
                                <td className="text-right">
                                    <button className="btn btn-sm btn-editar mr-2" 
                                            data-id={id} 
                                            onClick={(e)=>editar(e)}
                                            data-toggle="modal" 
                                            data-target="#modelEditar"
                                            modelEditar
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
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-grup ">
                            <label className="label label-default ">Nombre</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="nombre"
                                value={agregarUsuario.nombre}
                                onChange={(e)=>handleChange(e)}
                                required
                                />
                        </div>
                        <div className="form-grup">
                            <label className="label label-default">Apellido Paterno</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="apellidoPaterno"
                                value={agregarUsuario.apellidoPaterno}
                                onChange={(e)=>handleChange(e)}
                                required
                                />
                        </div>
                        <div className="form-grup">
                            <label className="label label-default">Apellido Materno</label>
                            <input type="text" 
                                    className="form-control"
                                    name="apellidoMaterno"
                                    value={agregarUsuario.apellidoMaterno}
                                    onChange={(e)=>handleChange(e)}
                                    required
                                    />
                        </div>
                        <div className="form-grup">
                            <label className="label label-default">Empresa</label>
                            <input type="text" 
                                    className="form-control"
                                    name="empresa"
                                    value={agregarUsuario.empresa}
                                    onChange={(e)=>handleChange(e)}
                                    required
                                    />
                        </div>
                        <div className="form-grup">
                            <label className="label label-default">Salario</label>
                            <input type="number" 
                                    className="form-control"
                                    name="salario"
                                    value={agregarUsuario.salario}
                                    onChange={(e)=>handleChange(e)}
                                    required
                                    />
                        </div>
                        <div className="form-grup">
                        <label className="label label-default">Imagen</label>
                        <input type="title" 
                                className="form-control"
                                name="imagen"
                                value={agregarUsuario.imagen}
                                onChange={(e)=>handleChange(e)}
                                required
                                />
                    </div>

                    <div className="modal-footer">
                    <button type="submit" className="btn btn-editar">Guardar</button>
                    </div>
                    </form>
                </div>
               
            </div>
            </div>
        </div>


        <div className="modal fade" id="modelEditar" 
        tabIndex={-1} role="dialog" 
        aria-labelledby="modelTitleId" 
        aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">Editar Usuario  { editarUsuario.nombre }</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            </div>
            <div className="modal-body">
                <form className="form" onSubmit={handleSubmitEdit}>
                    <div className="form-grup ">
                        <label className="label label-default ">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="nombre"
                            value={editarUsuario.nombre}
                            onChange={(e)=>handleChangeEditar(e)}
                            required
                            />
                    </div>
                    <div className="form-grup">
                        <label className="label label-default">Apellido Paterno</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="apellidoPaterno"
                            value={editarUsuario.apellidoPaterno}
                            onChange={(e)=>handleChangeEditar(e)}
                            required
                            />
                    </div>
                    <div className="form-grup">
                        <label className="label label-default">Apellido Materno</label>
                        <input type="text" 
                                className="form-control"
                                name="apellidoMaterno"
                                value={editarUsuario.apellidoMaterno}
                                onChange={(e)=>handleChangeEditar(e)}
                                required
                                />
                    </div>
              
                    <div className="form-grup">
                        <label className="label label-default">Salario</label>
                        <input type="number" 
                                className="form-control"
                                name="salario"
                                value={editarUsuario.salario}
                                onChange={(e)=>handleChangeEditar(e)}
                                required
                                />
                    </div>
                    <div className="form-grup">
                    <label className="label label-default">Imagen</label>
                    <input type="title" 
                            className="form-control"
                            name="imagen"
                            value={editarUsuario.imagen}
                            onChange={(e)=>handleChangeEditar(e)}
                            required
                            />
                </div>

                <div className="modal-footer">
                <button type="submit" className="btn btn-editar">Guardar</button>
                </div>
                </form>
            </div>
           
        </div>
        </div>
    </div>
        </div>

        </fragment>

    )
}



export default Tabla
