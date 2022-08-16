import React,{useState, useEffect} from "react"
import { NavLink } from "react-router-dom"
import {Registrar} from "./Registrar"
import {Listar} from "./Listar"
export const Menu = (props) =>
{
    const [usuario] =useState (localStorage.getItem("usuario"));
    const obtenerResgitros = () =>
    {
        var datos = localStorage.getItem("registrosLogin");
        if (datos){
            return JSON.parse(datos);

        }
        else{
            return[];
        }
    }
    const[registrosLogin, setRegistrosLogin] = useState(obtenerResgitros);
    const[registrar, setRegistrar] = useState("");
    const[listar, setListar] = useState("1");
    useEffect(() => {
        localStorage.setItem("registrosLogin",JSON.stringify(registrosLogin))
    },[registrosLogin])
    function cerrarSesion()
    {
        localStorage.removeItem("usuario");
        localStorage.removeItem("miLogin");
        document.getElementById("caja_menu").style.display ="none";
        document.getElementById("form_login").style.display ="block";
        document.getElementById("txtusuario").value= "";
        document.getElementById("txtpassword").value= "";
        document.getElementById("txtusuario").focus();
        


    }
    function op_Listar() {
        setRegistrar("0");
        setListar("1");
    }
    function op_Registrar() {
        setRegistrar("1");
        setListar("0");
    }
   
    return (
        <>
       
        <div id="caja_menu" style ={{textAlign:"center"}}>
        <strong className="h3">
            Bienvenido : {usuario.toUpperCase()}
        </strong>
        <a className="nav justify-content-center" style={{color:"white"}} href=" " onClick={cerrarSesion}>Cerrar sesión</a>
        <nav className ="navbar navbar-expand-lg navbar-light" style={{marginTop:20}}>
            <div className="container-fluid">
                <label className="navbar-brand h5" href="./Lista"></label>                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>   
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to ="" className="btn btn-primary btn-lg active" style={{paddingLeft:"20px", paddingRight:"20px",marginRight:"20px"}} onClick={op_Listar}>HOME</NavLink>
                        <button  className="btn btn-primary btn-lg" value="Registrar" style={{paddingLeft:"30px", paddingRight:"30px"}} onClick={op_Registrar} >Registrar</button>                    
                        

                    </div>
                    
                </div>
                
            </div>
        </nav>
      
        </div>  
        
        {registrar ==="1" && <Registrar/>}
        {listar ==="1" && <Listar/>}
        </>

    )
}