import { types } from "./types"
import {usuariosJson} from"../data/usuarios"
const initialState = {
    usuarios : [],
    local : false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.usuarios:
        return { 
            ...state, 
            usuarios : payload.usuarios 
        }
    case types.local :
        return {
            ...state ,
            local : payload.local
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
// obtenemos los usuarios del JSON
export const getUsuarios = () => {
    return async (dispatch) => {
        try {
            dispatch(setUsuarios( usuariosJson ))
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
