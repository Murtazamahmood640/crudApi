import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CreateUser from '../createUser/createUser';
const Sheraz = () => {
   const [users, setUsers] = useState([]);
  useEffect(()=>{
    const getAlluser = async ()=>{
     
      const {data} = await axios.get("http://localhost:5000/api/getAllUser");
      setUsers(data)
  // console.log(users);

      // console.log(data);
    }
    getAlluser()
  },[])
//   const [count,setCount] = useState(0)

//   const counter = () =>{
//     console.log("i m run with a click");

//     // setCount(count + 1);
//   }
// useEffect(()=>{
//   console.log('i m runing in a fucntion without anyclick')
// },[])
  return (
    <div>
      <CreateUser />
   {/* {
    users.map((user,index)=>{
      return (
        <div key={user._id}>
          <div>Email:{user.email}</div>
          <div>Name:{user.name}</div>
        </div>
      );
    })
   } */}
      {/* home 
      <button>count</button> */}
    </div>
  )
}

export default Sheraz
