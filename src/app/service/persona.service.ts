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


  listAll(): Observable<Persona[]>{
    return this.http.get<Persona[]>(Endpoints.LISTAR);
  }

  insert(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(Endpoints.INSERTAR,persona,{headers:Header.HEADER_JSON});
  }



