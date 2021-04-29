import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';

import Spiner from '../spiner';

const Userslist = (props) => {
  const { usuarios } = props;

  useEffect(()=>{
    props.traerTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const colocarInfo = () => {
    if(props.loading){
      return <Spiner/>
    }
    if (props.error){
      return (<p>error</p>)
    }

    return(
      <div className="margin">
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Mail</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => {
              return(
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              ) 
            })}
          </tbody>
        </table>
      </div>
    )

  }

  return(
    <>
      {colocarInfo()}
    </>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Userslist);