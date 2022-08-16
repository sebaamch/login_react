import React, {useState} from "react";
import {Menu} from './Menu'
export const Login = () =>
{
    const comprobarSesion = () =>{
        var sesion =localStorage.getItem("miLogin");
        if(sesion){
            return JSON.parse(sesion);
        }else{
            return false;
        }
    }
    const [miLogin, setMiLogin] = useState(comprobarSesion());
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    function iniciarSesión (e) 
    {
       e.preventDefault(); 
       var txtusuario = document.getElementById("txtusuario").value;
       var txtpassword = document.getElementById("txtpassword").value;
       if(txtusuario.length ===0 || txtpassword.length===0){
        alert("Complete los datos faltantes");
       }
       else
       {
        if(usuario ==="admin" && password==="admin"){
            setMiLogin(true);
            localStorage.setItem("miLogin", true);
            localStorage.setItem("usuario", usuario);
            document.getElementById("form_login").style.display = "none";
        
        }
        else{
            setMiLogin(false);
            alert("Usuario y/o contraseña erronea");
            document.getElementById("txtusuario").value ="";
            document.getElementById("txtpassword").value ="";
            document.getElementById("txtusuario").focus();

        }
       }
    }

    return (
        
        <div className="container " style={{background:"SkyBlue",marginTop:200, padding:100}}>
            { miLogin === false ?
            <form id="form_login">
                <div>
                    <h1 class="text-center" style={{color:"White", textalign:"center"}}> Login</h1>
                    <label htmlFor="txtusuario"><strong> Username: </strong></label>
                    <input type="text" id="txtusuario" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setUsuario(e.target.value) } required/>
                </div>
                <div>
                    <label htmlFor="txtpassword"> <strong>Password: </strong></label>
                    <input type="password" id="txtpassword" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setPassword(e.target.value) } required />

                </div><br/>
                <input type="submit"  className="btn btn-primary btn-md" value="Login" onClick={ iniciarSesión}/>
            </form> 
            : 
            <Menu/> 
            }
        </div>
    )
}