import {TRAER_USUARIOS, CARGANDO, ERROR, FIN_CARGANDO} from '../types/typesUsuarios';

const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case TRAER_USUARIOS:
      return {...state, 
              usuarios: action.payload
            };

    case CARGANDO:
      return{ ...state, loading: true}

    case FIN_CARGANDO:
      return {...state, loading:false}

    case ERROR:
      return {...state,
              error: action.payload
            }
      
    default: return state;
  }
}