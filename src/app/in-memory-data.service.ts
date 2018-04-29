import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb () {
        const contactos =[
            {id: 1, nombre:'Juan',apellido:'Perez',empresa:'alcadia',telefono:'3023245343',correo:'juanperes@correo.com'},
            {id: 1, nombre:'Adriana',apellido:'Lopes',empresa:'unimayor',telefono:'3012345343',correo:'jueres@correo.com'},
            {id: 1, nombre:'Ernesto',apellido:'Verdugo',empresa:'eteknik',telefono:'3032453434',correo:'jnperes@correo.com'},
            {id: 1, nombre:'Maria',apellido:'Vivas',empresa:'alcadia',telefono:'30232453437',correo:'juans@correo.com'},
            {id: 1, nombre:'Angela',apellido:'Valencia',empresa:'alcadia',telefono:'30223245345',correo:'jues@correo.com'},
        ];
    
        return(contactos);
    }
}