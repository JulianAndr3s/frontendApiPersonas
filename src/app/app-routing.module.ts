import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/partes/home/home.component';
import { FormularioPersonaComponent } from './components/partes/formulario-persona/formulario-persona.component';
import { ListaPersonaComponent } from './components/partes/lista-persona/lista-persona.component';
import { BuscarPersonaComponent } from './components/partes/buscar-persona/buscar-persona.component';
import { LoginComponent } from './components/partes/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'buscar-persona', component:  BuscarPersonaComponent},
  {path: 'lista-persona', component: ListaPersonaComponent},
  {path: 'formulario-persona', component: FormularioPersonaComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
