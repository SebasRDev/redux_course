import {useState, useEffect} from 'react';

const useUsers = (API) =>{
  const[users, setUsers] = useState([]);

  useEffect(() =>{
    async function fetchUsers() {
      let response = await fetch(API);
      let data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [users];
}

export default useUsers;