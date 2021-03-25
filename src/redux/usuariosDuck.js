import { types } from "./types"
import {usuariosJson} from"../data/usuarios"
const initialState = {
    usuarios : [],
    usuariosConst : [],
    local : false,
    ultimoId : 0
}

export const Usuarios = (state = initialState, { type, payload }) => {
    switch (type) {

    case types.usuarios:
        return { 
            ...state, 
            usuarios : payload.usuarios 
        }
    case types.usuariosConst:
        return { 
            ...state, 
            usuariosConst : payload.usuariosConst 
        }
    case types.local :
        return {
            ...state ,
            local : payload.local
        }
    case types.id :
        return {
            ...state ,
            ultimoId : payload.id
        }

    default:
        return state
    }
}


export const setUsuarios = ( usuarios )=> ({
    type: types.usuarios,
    payload : {
        usuarios
    }
})


export const setId = (id) => ({
    type: types.id,
    payload : {
        id
    }
})
export const setUsuariosConst = ( usuariosConst )=> ({
    type: types.usuariosConst,
    payload : {
        usuariosConst
    }
})
// obtenemos los usuarios del JSON
export const getUsuarios = () => {
    return async (dispatch) => {
        try {
            
            dispatch(setUsuarios( usuariosJson ))
            dispatch(setUsuariosConst( usuariosJson ))
            let na = usuariosJson
            let ultimoId = na.pop().id
            console.log(ultimoId)
            dispatch(setId ( ultimoId))
        } catch (e) {
            console.log(e)
        }
    };
};

export const changeLocal = (local) => ({
    type: types.local ,
    payload : {
        local
    }
});
