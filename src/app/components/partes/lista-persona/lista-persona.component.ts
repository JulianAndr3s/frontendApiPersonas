import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TipodocumentoService } from '../../../service/tipodocumento.service';
import { Tipodocumento } from '../../../modelo/tipodocumento';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {

  public persona: Persona = new Persona();
  public personaSeleccionada: Persona;
  public personaActualizar: Persona = new Persona();
  public documento: Tipodocumento = new Tipodocumento();
  public personas: Persona[];
  public documentos: Tipodocumento[];
  public idDocumento: number;
  constructor(private documentoService: TipodocumentoService, private personaService: PersonaService, private router: Router) { }

  ngOnInit() {
    this.listAllComponents();
  }

  listAllComponents() {
    this.documentoService.listAllDocumentos().subscribe(
      (documento) => {
        this.documentos = documento;
      }
    );
    this.personaService.listAll().subscribe(
      (persona) => {
        this.personas = persona;
      }
    );
  }

  showModal(persona: Persona) {
    this.personaSeleccionada = persona;
  }

  eliminar(id: number) {
    this.personaService.eliminar(id).subscribe(
      _ => (
        this.personas = this.personas.filter(persona => persona !== this.personaSeleccionada)
      )
    );
  }

  actualizar(idActualizar: number) {
    this.documento.id = this.idDocumento;
    this.personaActualizar.tipoDocumento = this.documento;
    this.personaService.actualizar(this.personaActualizar, idActualizar).subscribe(
      _ => {
        this.router.navigate(['/home']);
      }
    );
  }

}
