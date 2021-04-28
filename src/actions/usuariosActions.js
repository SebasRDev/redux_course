import {CARGANDO, ERROR, TRAER_USUARIOS} from '../types/typesUsuarios';

const API = 'https://jsonplaceholder.typicode.com/users'

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  })
  try {
    const response = await fetch(API);
    const data = await response.json();

    dispatch({
      type: TRAER_USUARIOS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
}