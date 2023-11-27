import {useState, useEffect} from "react";
import ErrorForm from "./ErrorForm";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) =>{

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect( () =>{
        if(Object.keys(paciente).length >0){
            setMascota(paciente.mascota);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    //evento de generar id
    const  generarId =() =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random+fecha;
    }

    //evento del boton submir
    const handleSubmit = (e) =>{
        e.preventDefault();

        if([mascota, propietario, email, alta, sintomas].includes('')){
            setError(true);
            return;
        }

        setError(false);
        const objetoPaciente ={
            mascota,
            propietario,
            email,
            alta,
            sintomas,
        }

        if(paciente.id){
            //editando nuevo registro 
            objetoPaciente.id = paciente.id
            const pacienteActualizados = pacientes.map(
                pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)
 
             setPacientes(pacienteActualizados);
             setPaciente({})    

        }else{
            //nuevo registro
            objetoPaciente.id = generarId();    
            const nuevosPacientes = [...pacientes, objetoPaciente];
            setPacientes(nuevosPacientes);
        }


        //poner todos los campos vacios
        setMascota('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }



    return(
        <div className="md:w-1/2 lg:w-2/5">
            
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            
            <p className="text-lg mt-5 text-center">
                Añade Pacientes {""}
            <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="mt-3 shadow-xl rounded-lg py-10 px-5 bg-white mb-10" onSubmit={handleSubmit}>
                {error && <ErrorForm mensaje='Todos los campos son obligatorios'/>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                     id="mascota"
                     type="text" placeholder="nombre de la mascota"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md focus:outline-blue-500" 
                     value={mascota}
                     onChange={ (e) => setMascota(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>
                    <input
                     id="propietario"
                     type="text" placeholder="nombre del propietario"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md  focus:outline-blue-500"
                     value={propietario}
                     onChange={ (e) => setPropietario(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email del propietario</label>
                    <input
                     id="email"
                     type="email" placeholder="email del propietario"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md  focus:outline-blue-500"
                     value={email}
                     onChange={ (e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                    <input
                     id="alta"
                     type="date"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md  focus:outline-blue-500"
                     value={alta}
                     onChange={ (e) => setAlta(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea id="sintomas" placeholder="Describe los sintomas de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md  focus:outline-blue-500"
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value)} />
                </div>
                <input type="submit" value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer  rounded-md hover:transition-all"
                
                />
            </form>
        </div>
    )
    
}

export default Formulario;