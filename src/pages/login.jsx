import { useState } from 'react';
import Axios from 'axios';
import'./login.css'
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [email,setEmail]=useState("");
    const [pass,setpass]=useState("");
    const navigate = useNavigate();
    const LoginUser= () => {
        Axios.post('http://127.0.0.1:8080/login/dashboard',{email:email,
          password:pass,
        }).then(()=>{
          console.log("success");
          navigate("/snippets");
        });
      };
  return (
    <div className='d-flex vh-100'>
       
      <div className="info" >
      <h1>Welcome Back!</h1>
      <label className='txt'>Email</label>
      <input type="text" onChange={(event)=>{ setEmail(event.target.value);
        
      }}/> 
      <label className='txt'>Password</label>
      <input type="Password" onChange={(event)=>{ setpass(event.target.value);
  
      }}/> 
       <button className='btnlogin' onClick={LoginUser}>Login</button>
       <div className='d-flex gap-1'>
       <p>Do not have an account?</p>
       <a href="/register">Register here</a>
       </div>

    </div>
    
    <div className='box'>

    </div>
    </div>
  )

    

}

export default Login
