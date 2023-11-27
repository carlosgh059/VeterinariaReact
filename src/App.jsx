import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

 const initialState = []
 const [pacientes, setPacientes] = useState(initialState); //props
 const [paciente, setPaciente] = useState({});

 //local storage------------

 useEffect (()=>{
      const obtenerLS = () =>{
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
        if(pacientesLS){
          setPacientes(pacientesLS)
        }
      }

   obtenerLS();
  },[])

useEffect(()=>{
  if(pacientes !== initialState){
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }
  },[pacientes])
  
//-------------------------

const eliminarPaciente = (id) => {
  const pacienteActualizado = pacientes.filter( paciente => paciente.id !== id)
  setPacientes(pacienteActualizado);
}
  return (
      <div className="container mx-auto pt-20"> 
        <Header />
        <div className="mt-12 md:flex h-1/2">
          <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
          />
          <ListadoPacientes
          pacientes={pacientes}
          setPaciente ={setPaciente}
          eliminarPaciente = {eliminarPaciente}
          />
        </div>
      </div>
  )
}

export default App
