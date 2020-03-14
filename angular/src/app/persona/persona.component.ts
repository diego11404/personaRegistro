import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent implements OnInit {

  title = 'Lista Personas'
  Persona : Persona[]

  constructor( private personaService: PersonaService, private router: Router) { 
     this.personaService.getPersonas().subscribe( ( data) =>{
       console.log(data)
        this.Persona = data
     })
  }
  
  ngOnInit(): void {

  }

  eliminar(persona : Persona){
    this.personaService.deletePersona(persona.idpersona).subscribe( ( data) =>{
      console.log(data)
      this.router.navigate(['/personas/add'])
    })
  }
 

}
