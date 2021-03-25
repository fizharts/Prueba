import React, { Fragment } from 'react'

export const Modals = ({ handleSubmit, agregarUsuario, handleChange, editarUsuario, handleSubmitEdit, handleChangeEditar }) => {

    return (
        <Fragment>
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
                                        onChange={(e) => handleChange(e)}
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
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-grup">
                                    <label className="label label-default">Apellido Materno</label>
                                    <input type="text"
                                        className="form-control"
                                        name="apellidoMaterno"
                                        value={agregarUsuario.apellidoMaterno}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-grup">
                                    <label className="label label-default">Empresa</label>
                                    <input type="text"
                                        className="form-control"
                                        name="empresa"
                                        value={agregarUsuario.empresa}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-grup">
                                    <label className="label label-default">Salario</label>
                                    <input type="number"
                                        className="form-control"
                                        name="salario"
                                        value={agregarUsuario.salario}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </div>
                                {/* <div className="form-grup">
                                    <label className="label label-default">Imagen</label>
                                    <input type="file" accept="video/*;capture=camcorder"
                                        className="form-control"
                                        name="imagen"
                                        value={agregarUsuario.imagen}
                                        onChange={(e) => handleChange(e)}

                                    />
                                </div> */}

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
                            <h5 className="modal-title">Editar Usuario  {editarUsuario.nombre}</h5>
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
                                        onChange={(e) => handleChangeEditar(e)}
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
                                        onChange={(e) => handleChangeEditar(e)}
                                        required
                                    />
                                </div>
                                <div className="form-grup">
                                    <label className="label label-default">Apellido Materno</label>
                                    <input type="text"
                                        className="form-control"
                                        name="apellidoMaterno"
                                        value={editarUsuario.apellidoMaterno}
                                        onChange={(e) => handleChangeEditar(e)}
                                        required
                                    />
                                </div>

                                <div className="form-grup">
                                    <label className="label label-default">Salario</label>
                                    <input type="number"
                                        className="form-control"
                                        name="salario"
                                        value={editarUsuario.salario}
                                        onChange={(e) => handleChangeEditar(e)}
                                        required
                                    />
                                </div>
                                {/* <div className="form-grup">
                                    <label className="label label-default">Imagen</label>
                                    <input type="title"
                                        className="form-control"
                                        name="imagen"
                                        value={editarUsuario.imagen}
                                        onChange={(e) => handleChangeEditar(e)}
                                        required
                                    />
                                </div> */}

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-editar">Guardar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}
