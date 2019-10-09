import { Tipodocumento } from './tipodocumento';

export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    tipoDocumento = new Tipodocumento();
}
