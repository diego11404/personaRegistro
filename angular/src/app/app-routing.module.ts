import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import {  PersonaComponent } from './persona/persona.component';

import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', redirectTo : 'persona/all' , pathMatch: 'full'},
  { path: '',
    children: [
      { path: 'persona/all',  component: PersonaComponent },
      { path: 'persona/add',  component: AddPersonaComponent },
      { path: 'persona/update/:id',  component: AddPersonaComponent },
      { path: '',  redirectTo : 'persona/all' , pathMatch: 'full'},

    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }