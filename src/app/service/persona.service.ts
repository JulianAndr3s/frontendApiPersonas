import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from 'src/app/modelo/persona';
import { Endpoints } from '../util/endpoints';
import { Header } from '../util/header';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  listAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(Endpoints.LISTAR);
  }
  buscar(tipoDocumento: number, numeroDocumento: string): Observable<Persona> {
    let token = this.loginService.token;
    let httpHeaders = new HttpHeaders();
    if (token != null){
       httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    httpHeaders.get('Authorization');
    // tslint:disable-next-line: max-line-length
    return this.http.get<Persona>(Endpoints.BUSCAR.concat(tipoDocumento.toString()).concat('/').concat(numeroDocumento).concat('/personas'), {headers : httpHeaders});
  }
  insert(persona: Persona): Observable<Persona> {
    let token = this.loginService.token;
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    if (token != null){
      httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    httpHeaders.get('Authorization');
    httpHeaders.get('Content-Type');
    return this.http.post<Persona>(Endpoints.INSERTAR, persona , {headers : httpHeaders});
  }
  eliminar(id: number) {
    let token = this.loginService.token;
    let httpHeaders = new HttpHeaders();
    if (token != null){
       httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    httpHeaders.get('Authorization');
    return this.http.delete<Persona>(Endpoints.ELIMINAR.concat(id.toString()).concat('/persona'), {headers : httpHeaders} );
  }
  actualizar(persona: Persona, id: number) {
    let token = this.loginService.token;
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    if (token != null){
      httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    httpHeaders.get('Authorization');
    httpHeaders.get('Content-Type');
    return this.http.put<Persona>(Endpoints.ACTUALIZAR.concat(id.toString()).concat('/persona'), persona, {headers : httpHeaders} );
  }
}

