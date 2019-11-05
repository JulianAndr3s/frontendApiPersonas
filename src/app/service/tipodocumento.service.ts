import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipodocumento } from '../modelo/tipodocumento';
import { Endpoints } from '../util/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {

  constructor(private http: HttpClient) { }


  listAllDocumentos(): Observable<Tipodocumento[]> {
    return this.http.get<Tipodocumento[]>(Endpoints.LISTARDOCUMENTOS);
  }
}
