import React, { useState } from 'react';

const Formulario = ({guardarBusqueda}) => {

    const [formulario, guardarFormulario ] = useState({
        getEmpresas: '',
        getEmpresa: '',
        crear: '',
        update: '',
        delete:'',
        llave_aut: '',
        name: '',
        id_empresa:'',
        num_workers: '',
        date_create: '',
        type: ''
    });
 
    const handleChange = e => {
        //cambiar el state
        guardarFormulario({
            ...formulario,
            [e.target.id] : e.target.value
        })
    }
    const buscarEmpresas = e => {
        e.preventDefault();

        guardarBusqueda(formulario);
        
    };

    return ( 
        <form
            onSubmit={buscarEmpresas}
        >
            <ul className="list-group list-inline">
                <li className="list-group-item">
                    <label htmlFor="getEmpresas" className="spacing">Ver Todas las Empresas (GET)</label>
                    <input
                        id="getEmpresas"
                        type="radio"
                        placeholder="Listar empresas"
                        value="Listar empresas"
                        name="opciones"
                        onChange={handleChange}
                        
                    />
                </li> 
                <li className="list-group-item">
                    <label htmlFor="getEmpresa" className="spacing">Obtener Empresa (GET)</label>
                    <input
                        id="getEmpresa"
                        type="radio"
                        value="Buscar Empresa"
                        name="opciones"
                        onChange={handleChange}
                    />
                </li>
                <li className="list-group-item p-50">
                    <label htmlFor="crear" className="spacing">Crear (POST)</label>
                    <input
                        id="crear"
                        type="radio"
                        value="Crear Empresa"
                        name="opciones"
                        onChange={handleChange}
                    />
                </li>    
                <li className="list-group-item">
                    <label htmlFor="update" className="spacing">Actualizar Empresa (PUT)</label>
                    <input
                        id="update"
                        type="radio"
                        value="Actualizar Empresa"
                        name="opciones"
                        onChange={handleChange}
                    />
                </li> 
                <li className="list-group-item">
                    <label htmlFor="delete" className="spacing">Borrar (DELETE)</label>
                    <input
                        id="delete"
                        type="radio"
                        value="Borrar Empresa"
                        name="opciones"
                        onChange={handleChange}
                    />
                </li>                
            </ul>
            <div className="row">
                <div className="form-group">
                    <input
                        type="text"
                        id="llave_aut"
                        className="form-control form-control-lg"
                        placeholder="Indicar Llave autorización en base_64"
                        onChange={handleChange}
                    />
                </div> 
                <div className="form-group">
                    <input
                        type="text"
                        id="id_empresa"
                        className="form-control form-control-lg"
                        placeholder="Indicar ID empresa"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        placeholder="Indicar nombre empresa"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="num_workers"
                        className="form-control form-control-lg"
                        placeholder="Indicar número de trabajadores"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="date_create"
                        className="form-control form-control-lg"
                        placeholder="Indicar fecha de creación"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="type"
                        className="form-control form-control-lg"
                        placeholder="Indicar tipo empresa (1: Software, 2: Retail)"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit"
                        name="opciones"
                    />
                </div>                             
            </div>
        </form>
     );
}
 
export default Formulario;