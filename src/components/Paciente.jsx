function Paciente({pacientes, setPaciente, eliminarPaciente}){
    //extraemos propiedades de paciente si quieremos
    const {mascota, propietario, email, alta, sintomas, id} = pacientes;

    const handleEliminar = () =>{
        const respuesta = confirm("Estas seguro que desea eliminar?")

        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return(
        <div className=" shadow-2xl bg-blue-50 m-3 px-5 py-10 pb-5 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">{pacientes.mascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintoma: {""}
                <span className="font-normal normal-case">{pacientes.sintomas}</span>
            </p>
            <div className="flex justify-between mt-10 mb-3">
                <button type="button"
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                        onClick={()=> setPaciente(pacientes)}>
                    Editar
                </button>
                <button type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente;