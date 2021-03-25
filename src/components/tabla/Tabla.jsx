import React, {  useState } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import { formatoNumero } from '../../fun/fun'
import { setId, setUsuarios , setUsuariosConst } from '../../redux/usuariosDuck'
import { Foto } from '../Foto/Foto'
import { Modals } from '../modals/Modals';

const Tabla = () => {
    const { usuarios , local ,ultimoId } = useSelector(state => state.usuarios)
    const dispatch = useDispatch()
    const [agregarUsuario, setAgregarUsuario] = useState({

            id : ultimoId	,
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
                    dispatch(
                        setUsuariosConst(
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
            id: ultimoId
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

            setAgregarUsuario({
                id : 0	,
                nombre : '',
                apellidoPaterno : '',
                apellidoMaterno : '',
                salario : 0,
                empresa : '',
                imagen : ''
            })
            
            dispatch(
                setId(
                    ultimoId+1
                )
            )

            Swal.fire(
      'Listo!!',
      'El usuario fue agregado',
      'success')
    
            
    }

    const handleSubmitEdit = ( e )=> {
        e.preventDefault()
        let borrado = usuarios.filter(u => u.id !== parseInt(editarUsuario.id)) 
        let nuevo = [
            ...borrado,
            {...editarUsuario}
        ] 
        nuevo.sort((a,b)=> a.id -b.id)
        
     

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

            Swal.fire(
                'Listo!!',
                'Usuario editado con exito',
                'success')
    
    }

    const agregar = ()=> {
     
        setAgregarUsuario({

            id : ultimoId ,	
            nombre : '',
            apellidoPaterno : '',
            apellidoMaterno : '',
            salario : 0,
            empresa : '',
            imagen : ''

    })
   

        
    }

    return (
        <Fragment>

    
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
                                <td className="text-right">
                                    <Foto/>
                                </td>
                                <td className="text-right">
                                    <button className="btn btn-sm btn-editar mr-2" 
                                            data-id={id} 
                                            onClick={(e)=>editar(e)}
                                            data-toggle="modal" 
                                            data-target="#modelEditar"
                                            
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

            <Modals 
                    handleSubmit={handleSubmit}
                    agregarUsuario={agregarUsuario}
                    handleChange={handleChange}
                    editarUsuario={editarUsuario}
                    handleSubmitEdit={handleSubmitEdit}
                    handleChangeEditar={handleChangeEditar}/>



        </div>

        </Fragment>

    )
}



export default Tabla
