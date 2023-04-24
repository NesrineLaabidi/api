import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loadUser, setLoadUser] = useState([true]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoadUser(false);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="table-container">
      {loadUser ? (
        <h1>Loading...</h1>
      ) : (
        <div>
            <h1>Customer</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Street</th>
              <th>City</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company Name</th>


            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
