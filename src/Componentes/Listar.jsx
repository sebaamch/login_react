import React,{useState, useEffect} from "react"
import {Registrar} from "./Registrar"
import {Menu} from './Menu'

export const Listar =() => {
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
    const[Listar, setListar] = useState("");
    const botonEliminar =(miIndex)=> {
        if(window.confirm("¿Está seguro que desea eliminar?"))
        {
            var registrosFiltrados = registrosLogin.filter((e, index) => {
                return miIndex !==index
            });
            setRegistrosLogin(registrosFiltrados);
        }
    }
    useEffect(() => {
        localStorage.setItem("registrosLogin",JSON.stringify(registrosLogin))
    },[registrosLogin])

   
    return (
        <>
        
        <div className="bg-light" style={{marginTop:20, padding:20}}>
        <div className="h3 text-center">
           Registros
        </div>
        <div className=" table-responsive">
            <>
            <table className="table table-bordered table-hover" style={{marginTop:12}}>
                <thead className="text-center" style={{background:"lightgray"}}>
                    <tr>
                        <th> #</th>
                        <th >Nombre</th>
                        <th>Apellido</th>
                        <th>Dirección</th>
                        <th>Comuna </th>
                        <th>Coordenada latitud</th>
                        <th>Coordenada longitud</th>
                        <th></th>
                        
                    </tr>

                </thead>
                <tbody className="text-center align-baseline">
                    {
                        registrosLogin.map((x, index) => (
                            <tr key ={index}>
                                <th>{index+1}</th>
                                <td>{x.nombre}</td>
                                <td>{x.apellido}</td>
                                <td>{x.dirección}</td>
                                <td>{x.comuna}</td>
                                <td>{x.coordenadalat}</td>
                                <td>{x.coordenadalong}</td>
                                <td className="text-center">
                                    <button className="btn btn-outline-danger" onClick={()=>botonEliminar(index)}>
                                        <i class="bi bi-trash3-fill"></i>
                                    </button>
                                </td>


                            </tr>

                        ))
                    }

                </tbody>
            </table>
            
            </>
        </div>
    </div>
        
        
        {registrar ==="1" && <Registrar/>}
        {Listar ==="1" && <Menu/>}
        </>
    )
}