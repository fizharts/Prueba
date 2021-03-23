import { types } from "./types"
import {usuariosJson} from"../data/usuarios"
const initialState = {
    usuarios : []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.usuarios:
        return { 
            ...state, 
            usuarios : payload.usuarios }

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
