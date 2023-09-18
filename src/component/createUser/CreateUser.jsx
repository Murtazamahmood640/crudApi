import React, { useState } from 'react'
import axios from 'axios'
const CreateUser = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');
const addUser = async ()=>{
    try{
    const res = await axios.post("http://localhost:5000/api/createUser",{name,email,password});
        console.log(res)
    }catch(e){console.log(e)}
}
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={addUser}>create User</button>
    </div>
  );
}

export default CreateUser
