import { Component, OnInit } from '@angular/core';
import { Persona } from "../persona";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PersonaService } from "../persona.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  idPersona: string | null = this.route.snapshot.paramMap.get('id');
  title = !!this.idPersona ? 'Actualizar Persona' : 'Añadir Persona'

  per: Persona
  constructor(private router: Router,private route: ActivatedRoute, private personaService: PersonaService, private location: Location) { 
  }

  ngOnInit(): void {
    if (!!this.idPersona)
      this.getPersona()
    else
      this.per = {
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        celular: '',
        fechaNacimiento: '',
        hasCoronavirus: '',
        hasSintomas: ''
      }
  }

  getPersona() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personaService.getPersona(id).subscribe(persona => {
      if (persona[0]){
        this.per = persona[0]
        persona[0].fechaNacimiento = new DatePipe('en-US')
        .transform(persona[0].fechaNacimiento, 'yyyy/MM/dd')
      }
      else
        alert('Persona no existe')

      console.log('persona', persona)
    });
  }

  guardar(per) {
    if(!per.fechaNacimiento.trim()){
      return
    }
    this.personaService.createPersona(per).subscribe(persona => {
      console.log('saved', persona)
        this.router.navigate(['/persona/all'])
    });

  }

  Actualizar(per) {
    this.personaService.updatePersona(per).subscribe(persona => {
      console.log('saved', persona)
        this.router.navigate(['/persona/all'])
    });

  }

}
