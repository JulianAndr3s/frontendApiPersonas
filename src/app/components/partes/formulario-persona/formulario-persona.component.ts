import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { Observable } from 'rxjs';
import { PersonaService } from '../../../service/persona.service';
import { Router } from '@angular/router';
import { Tipodocumento } from '../../../modelo/tipodocumento';
import { TipodocumentoService } from '../../../service/tipodocumento.service';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  public persona: Persona = new Persona();
  public documentos: Tipodocumento[];
  public id: number;
  public documento: Tipodocumento = new Tipodocumento();
  constructor(private documentoService: TipodocumentoService, private personaService: PersonaService, private router: Router) { }

  ngOnInit() {
    this.documentoService.listAllDocumentos().subscribe(
      (documento) => {
        this.documentos = documento;
      }
    );
  }

  insert() {
    this.documento.id = this.id;
    this.persona.tipoDocumento = this.documento;
    this.personaService.insert(this.persona).subscribe(
      _ => {
        this.router.navigate(['/lista-persona']);
      }
    );
  }

}
