import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import "../index.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const apiUrl = "http://localhost:3000/api/users";
      try {
        const res = await axios.get(apiUrl);
        const data = res.data;
        setUsers(data);
      } catch (error) {
        console.log("error in axios", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-white">All Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-4 rounded shadow"
            >
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Password:</strong> {user.password}
              </p>
              <button className="btn-1">Chat with {user.name}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllUsers;
