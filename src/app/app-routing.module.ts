import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/partes/home/home.component';
import { FormularioPersonaComponent } from './components/partes/formulario-persona/formulario-persona.component';
import { ListaPersonaComponent } from './components/partes/lista-persona/lista-persona.component';

const routes: Routes = [
  {path: 'lista-persona', component: ListaPersonaComponent},
  {path: 'formulario-persona', component: FormularioPersonaComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
