import { useState } from "react";
import swal from 'sweetalert';


const Login = ({setLogged}) => {
    const [user_name,setUserName] = useState('');
    const [user_pass,setUserPass] = useState('');
    const handleLogin = ()=>{
        if(user_name === "admin" && user_pass === "bytecode@2020"){
            setLogged(true);
            swal("Authentication Success","Successfully Logged in...","success");
        }else{
            swal("Authentication Failed","Invalid Credentials","error")
        }
    }
    return ( 
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={(e)=>{e.preventDefault();}}>
                <input type="text" onChange={e=>{setUserName(e.target.value)}} id="user_name" name="username" value={user_name} placeholder="User Name"/>
                <input type="password" onChange={e=>{setUserPass(e.target.value)}} id="user_pass" name="user_pass" value={user_pass} placeholder="Password"/>
                <input type="submit" onClick={handleLogin} value="Login" />
            </form>
        </div>
     );
}
 
export default Login;