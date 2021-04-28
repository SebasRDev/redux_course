import {TRAER_USUARIOS, CARGANDO, ERROR} from '../types/typesUsuarios';

const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case TRAER_USUARIOS:
      return {...state, 
              usuarios: action.payload,
              loading: false
            };

    case CARGANDO:
      return{ ...state, loading: true}

    case ERROR:
      return {...state,
              error: action.payload,
              loading: false
            }
      
    default: return state;
  }
}