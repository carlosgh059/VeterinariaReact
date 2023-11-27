import Paciente from "./Paciente";

function ListadoPacientes ({pacientes, setPaciente, eliminarPaciente}){

    const siHayPacientes = () => {
      return(
        <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administrs tus {""}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
        
            { pacientes.map( (pacientes) =>{
                return(
                <Paciente
                key={pacientes.id}
                pacientes = {pacientes}
                setPaciente={setPaciente}
                eliminarPaciente ={eliminarPaciente}
                />
                )
                })
            }
        </>
      )
    }

    const noHayPacientes = () =>{
        return(
            <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">Rellena tus Pacientes y {""}
                    <span className="text-indigo-600 font-bold">se añadiran a la lista</span>
                </p>
             </> 
        )
    }

    const eleccion = () =>
    {
        if(pacientes.length === 0){
            return noHayPacientes();
        }else{
            return siHayPacientes();
        }
           
    }


    return( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            {eleccion()}
        </div>
    )
}

export default ListadoPacientes;