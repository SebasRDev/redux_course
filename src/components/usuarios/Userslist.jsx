import React from 'react';
import {connect} from 'react-redux';

import useUsers from '../../hooks/useUsers';


const API = 'https://jsonplaceholder.typicode.com/users'


const Userslist = (props) => {

  const [users] = useUsers(API);

  console.log(props);

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
          {users.map((user) => {
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

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, {/*Actions*/})(Userslist);