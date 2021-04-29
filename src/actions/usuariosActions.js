import {CARGANDO, ERROR, FIN_CARGANDO, TRAER_USUARIOS} from '../types/typesUsuarios';

const API = 'https://jsonplaceholder.typicode.com/users'

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    let response = await fetch(API);
    if(!response.ok){
      throw new Error(`Error ${response.status}`);
    }
    else{
      let data = await response.json();
      dispatch({
        type: TRAER_USUARIOS,
        payload: data
      })
    }
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }finally{
    dispatch({
      type: FIN_CARGANDO,
    })
  }
}