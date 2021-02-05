import { useEffect, useState } from "react";
import axios from "axios";

import UserListComponent from '../components/UserListComponent'
const UserListContainer = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        console.log(response);
        const { status, data } = response;
        if (status === 200) {
          const { data: usersData } = data;
          setUser(usersData);
        } else {
          throw new Error("Error");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div>
      <h1 style={{color: 'white'}}>User List</h1>
      {users.map((element) => {
        const { id, email, first_name, last_name, avatar } = element;
        return (
          <UserListComponent
            id={id}
            email={email}
            first_name={first_name}
            last_name={last_name}
            avatar={avatar}
          />
        );
      })}
    </div>
  );
};

export default UserListContainer;