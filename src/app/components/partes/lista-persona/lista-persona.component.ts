import { Component, OnInit } from '@angular/core';
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
  public documento: Tipodocumento = new Tipodocumento();
  public personas: Persona[];
  public documentos: Tipodocumento[];
  constructor(private documentoService: TipodocumentoService, private personaService: PersonaService) { }

  ngOnInit() {
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

}
