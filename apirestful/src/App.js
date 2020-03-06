import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaEmpresas from './components/ListaEmpresas';
import Error from './components/Error';
import Success from './components/Success';


function App() {

  const [ busqueda, guardarBusqueda ]  = useState({
        getEmpresas: '',
        getEmpresa: '',
        crear: '',
        update: '',
        delete:'',
        llave_aut: '',
        id_empresa:'',
        num_workers: '',
        date_create: '',
        type: ''
    });
  const [ empresas, guardarEmpresas ] = useState([]);
  const [error,guardarError] = useState('');
  const [success,guardarSuccess] = useState('');

  useEffect(()=>{
    const consultarApi = async () => {
      var data;
      if(busqueda.llave_aut === '') {
        guardarSuccess('');
        guardarError("Ingrese llave de autorización");
        return;
      }
      if(busqueda.getEmpresas !== '') {
        const key = busqueda.llave_aut;
        const url = `http://apirest.com/companies`;
        guardarSuccess('');

        const respuesta = await fetch(url, { 
          method: 'get', 
          headers: new Headers({
            'Authorization': key, 
            'Content-Type': 'application/json'
          }), 
        });
        const resultado = await respuesta.json();
        busqueda.getEmpresas='';
        guardarEmpresas(resultado.details);
        guardarError('');

      } else if(busqueda.getEmpresa !== '' && busqueda.id_empresa !== '' ) {
        const key = busqueda.llave_aut;
        const url = `http://apirest.com/companies/${busqueda.id_empresa}`;
        guardarSuccess('');

        console.log(busqueda.id_empresa);
        const respuesta = await fetch(url, { 
          method: 'get', 
          headers: new Headers({
            'Authorization': key, 
            'Content-Type': 'application/json'
          }), 
        });
        const resultado = await respuesta.json();
        busqueda.getEmpresa='';
        guardarEmpresas(resultado.details);
        guardarError('');

      } else if(busqueda.crear !== '' && busqueda.name !== '' && busqueda.num_workers !== '' && busqueda.date_create !== '' && busqueda.type !== '' ) {
        const key = busqueda.llave_aut;
        const url = `http://apirest.com/companies`;
        guardarSuccess('');
        
        data = {
          "name": busqueda.name,
          "num_workers": busqueda.num_workers,
          "date_create": busqueda.date_create,
          "type": busqueda.type
        };
        const respuesta = await fetch(url, { 
          method: 'POST',
          body: JSON.stringify(data), 
          headers: new Headers({
            'Authorization': key, 
            'Content-Type': 'application/json'
          }), 
        });
        const resultado = await respuesta.json();
        busqueda.crear='';
        guardarEmpresas(resultado.details);

        if(resultado.details === "Registro exitoso, su empresa ha sido guardada"){    
          guardarSuccess(resultado.details);
          guardarError("");
        }
        else if(resultado.details.name!=="The name has already been taken."){
          guardarError("El nombre de empresa ya ha sido tomado");
        } 
      } else if(busqueda.update !== '' && busqueda.name && busqueda.num_workers && busqueda.date_create && busqueda.type !== '' ) {
          const key = busqueda.llave_aut;
          const url = `http://apirest.com/companies/${busqueda.id_empresa}`;
          guardarSuccess('');
          
          data = {
            "name": busqueda.name,
            "num_workers": busqueda.num_workers,
            "date_create": busqueda.date_create,
            "type": busqueda.type
          };
          const respuesta = await fetch(url, { 
            method: 'PUT',
            body: JSON.stringify(data), 
            headers: new Headers({
              'Authorization': key, 
              'Content-Type': 'application/json'
            }), 
          });
          const resultado = await respuesta.json();
          busqueda.update='';
          guardarEmpresas(resultado.details);
          console.log(resultado.details);
          if(resultado.status === 200){    
            guardarSuccess(resultado.details);
            guardarError("");
          }
          else if(resultado.details.name!=="The name has already been taken."){
            guardarError("El nombre de empresa ya ha sido tomado");
          }
        }else if(busqueda.delete && busqueda.id_empresa !== '') {
          const key = busqueda.llave_aut;
          const url = `http://apirest.com/companies/${busqueda.id_empresa}`;
          guardarSuccess('');
          
          const respuesta = await fetch(url, { 
            method: 'DELETE', 
            headers: new Headers({
              'Authorization': key, 
              'Content-Type': 'application/json'
            }), 
          });
          const resultado = await respuesta.json();
          busqueda.update='';
          guardarEmpresas(resultado.details);
          console.log(resultado.details);
          if(resultado.status === 200){    
            guardarSuccess(resultado.details);
            guardarError("");
          }
          else if(resultado.details.name!=="The name has already been taken."){
            guardarError("El nombre de empresa ya ha sido tomado");
          }
      }else{
        console.log(busqueda.type);
        guardarError("llene los campos necesarios");
      }
    }
    consultarApi();
  },[busqueda])

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h1 className=" bold text-center mb-5">Consumir APIRestful</h1>  
        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      { error ? <Error mensaje={error} /> : null }
      { success ? <Success mensaje={success} /> : null }
      <div className="row justify-content-center">
      <ListaEmpresas
          empresas={empresas}
        />
      </div>
    </div>
  );
}

export default App;
