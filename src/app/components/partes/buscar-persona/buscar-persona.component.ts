import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';
import { TipodocumentoService } from 'src/app/service/tipodocumento.service';
import { Tipodocumento } from '../../../modelo/tipodocumento';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  public persona: Persona;
  public idNumeroDocumento: string;
  public documentos: Tipodocumento[];
  public idDocumento: number;

  constructor(private personaService: PersonaService, private documentoService: TipodocumentoService, private router: Router) { }


  ngOnInit() {
    this.documentoService.listAllDocumentos().subscribe(
      (documento) => {
        this.documentos = documento;
      }
    );
  }

  buscar() {
    this.personaService.buscar(this.idDocumento, this.idNumeroDocumento).subscribe(
      (personaBuscada) => {
        this.persona = personaBuscada;
      }
    );
  }

}
