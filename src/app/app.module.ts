import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/partes/home/home.component';
import { ListaPersonaComponent } from './components/partes/lista-persona/lista-persona.component';
import { FormularioPersonaComponent } from './components/partes/formulario-persona/formulario-persona.component';
import { PersonaService } from './service/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TipodocumentoService } from './service/tipodocumento.service';
import { BuscarPersonaComponent } from './components/partes/buscar-persona/buscar-persona.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListaPersonaComponent,
    FormularioPersonaComponent,
    BuscarPersonaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaService, TipodocumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
