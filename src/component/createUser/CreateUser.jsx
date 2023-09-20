import React, { useState } from 'react'
import axios from 'axios'
const CreateUser = () => {
  const user = localStorage.getItem("user");
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [userImg, setUserImg] = useState("");

const addUser = async ()=>{
  const formData = new FormData()
  formData.append('userImg',userImg)
  formData.append("email", email);
  formData.append("password", password);
  formData.append("name", name);
console.log(userImg)
    try{
    const { data } = await axios.post("http://localhost:5000/api/createUser", {
      headers: {
        authorizaton: user,
      },
    });
        console.log(data)
        localStorage.setItem('user',JSON.stringify(data))
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
      <input type="file" onChange={(e)=>{setUserImg(e.target.files[0])}} />
      <button onClick={addUser}>create User</button>
    </div>
  );
}

export default CreateUser
