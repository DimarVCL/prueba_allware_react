import React from 'react';
import { MDBDataTable } from 'mdbreact';

const ListaEmpresas = ({empresas}) => {
    let data;
    if(empresas !== 'Registro exitoso, su empresa ha sido guardada' && JSON.stringify(empresas.name) !== "[\"The name has already been taken.\"]" && empresas !== 'Se ha borrado su empresa con exito'){       
        data = {
        columns: [
            {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 400
            },
            {
            label: 'Num_workers',
            field: 'num_workers',
            sort: 'asc',
            width: 300
            },
            {
            label: 'Date_create',
            field: 'date_create',
            sort: 'asc',
            width: 300
            },
            {
            label: 'Type',
            field: 'type',
            sort: 'asc',
            width: 300
            },
        
        ],
        rows: empresas
        };
    }else{
        data='';
    }
    console.log(empresas);
    return (
        <MDBDataTable
          striped
          bordered
          scrollY
          small
          data={data}
        />
    );
}
 
export default ListaEmpresas;