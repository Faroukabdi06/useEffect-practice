import UserList from "../components/UserList"
import {useState, useEffect} from "react";


function App() {
    const [users, setUsers] = useState([]);
    const[randomUser, setRandomUser] = useState(null)
    // console.log(users)
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
    }, ["https://jsonplaceholder.typicode.com/users/"])

function getAllUsers(){
  setRandomUser(null)
}

 function randomNumber(){
  if(users.length> 0){
    const randomnumb = Math.floor(Math.random()*users.length)
    setRandomUser(users[randomnumb])
    console.log('after',randomUser)
  }
  }
    return (
        <>
          <UserList users={users}
          randomNumber={randomNumber}
          randomUser={randomUser}
          getAll={getAllUsers}
          />
        </>
    )
}

export default App
