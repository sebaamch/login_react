import React,{useState,useEffect} from "react";
import SimpleMap from "../Mapa";
export const Registrar = () =>
{
    
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
    const[nombre,setNombre] = useState("");
    const[apellido,setApellido] = useState("");
    const[dirección,setDireccion] = useState("");
    const[comuna,setComuna] = useState("");
    const[coordenadalat,setCoordenadalat] = useState("");
    const[coordenadalong,setCoordenadalong] = useState("");


    const botonGuardar =(e) =>
    {
        e.preventDefault ();
        var miObjeto = {nombre,apellido,dirección,comuna,coordenadalat,coordenadalong}
        setRegistrosLogin([...registrosLogin,miObjeto]);
        limpiarFormulario();
    }

    useEffect(( )=> {
        localStorage.setItem("registrosLogin",JSON.stringify(registrosLogin))
    }, [registrosLogin]);

    const limpiarFormulario = () => {
        setNombre("");
        setApellido("");
        setDireccion("");
        setComuna("");
        setCoordenadalat("");
        setCoordenadalong("");
        document.getElementById("miFormulario").reset();

    }
    return (
        <div className="bg-light" style={{marginTop:20, padding:20}}>
        <div className="h3">
            Formulario de registro
            <br/>
            <form id="miFormulario" onSubmit={botonGuardar}>
                <div className="row" style={{marginTop:20}}>
                    <div className="col-6">
                       <input className="form-control form-control-lg text-center" type="text" style={{marginBottom:"20px"}} placeholder="Escriba su nombre" onChange={(e) => setNombre(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                       <input className="form-control form-control-lg text-center" type="text" style={{marginBottom:"20px"}} placeholder="Escriba su apellido" onChange={(e) => setApellido(e.target.value)}required/>
                        </div>
                        <div className="col-6">
                       <input className="form-control form-control-lg text-center" type="text" style={{marginBottom:"20px"}} placeholder="Escriba su dirección" onChange={(e) => setDireccion(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                       <input className="form-control form-control-lg text-center" type="text" style={{marginBottom:"20px"}} placeholder="Escriba su comuna" onChange={(e) => setComuna(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                       <input className="form-control form-control-lg text-center" type="text" style={{marginBottom:"20px"}} placeholder="Escriba las coordenadas de latitud" onChange={(e) => setCoordenadalat(e.target.value)} required/>
                      
                        </div>
                       
                        <div className="col-6">
                        <input className="form-control form-control-lg text-center" type="text" style={{marginBottom:"20px"}} placeholder="Escriba las coordenadas de longitud" onChange={(e) => setCoordenadalong(e.target.value)} required/>
                        </div>
                        
                        
                </div>
                <div className="row" style={{marginTop:20}}>
                    <div className="col">
                        <button className="btn btn-primary btn-lg">Guardar Datos</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}