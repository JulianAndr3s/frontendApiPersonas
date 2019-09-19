import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/partes/home/home.component';
import { ListaPersonaComponent } from './components/partes/lista-persona/lista-persona.component';
import { FormularioPersonaComponent } from './components/partes/formulario-persona/formulario-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListaPersonaComponent,
    FormularioPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
