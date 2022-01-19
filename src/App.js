import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

import {useState} from 'react';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler} />
      {usersList.length !== 0 && <UserList users={usersList}/>}
    </div>
  );
}

export default App;
