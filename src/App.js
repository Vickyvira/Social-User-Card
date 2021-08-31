import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.data);
      setUsers(userData.data);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.first_name} ${user.last_name}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
