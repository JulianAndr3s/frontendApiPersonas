import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/app/modelo/persona';
import { Endpoints } from '../util/endpoints';
import { Header } from '../util/header';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  listAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(Endpoints.LISTAR);
  }
  buscar(tipoDocumento: number, numeroDocumento: string): Observable<Persona> {
    return this.http.get<Persona>(Endpoints.BUSCAR.concat(tipoDocumento.toString()).concat('/').concat(numeroDocumento).concat('/personas'), {headers : Header.HEADER_JSON});
  }
  insert(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(Endpoints.INSERTAR, persona , {headers : Header.HEADER_JSON});
  }
  eliminar(id: number) {
    return this.http.delete<Persona>(Endpoints.ELIMINAR.concat(id.toString()).concat('/persona'), {headers : Header.HEADER_TEXT} );
  }
  actualizar(persona: Persona, id: number) {
    return this.http.put<Persona>(Endpoints.ACTUALIZAR.concat(id.toString()).concat('/persona'), persona, {headers : Header.HEADER_JSON} );
  }
}

