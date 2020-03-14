import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import {  PersonaComponent } from './persona/persona.component';

import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', redirectTo : 'personas' , pathMatch: 'full'},
  { path: '',
    children: [
      { path: 'personas',  component: PersonaComponent },
      { path: 'personas/add',  component: AddPersonaComponent },
      { path: 'personas/:id',  component: AddPersonaComponent },
      { path: '',  redirectTo : 'personas' , pathMatch: 'full'},

    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }