import { Component, OnInit } from '@angular/core';

import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {

  private personas: Persona[];
  constructor(private personaService: PersonaService) {
  }

  ngOnInit() {
    this.personaService.listAll().subscribe(
      (personas) => {
        this.personas = personas;
      }
    );
  }

}
