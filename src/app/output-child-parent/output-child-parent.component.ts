import { Component } from '@angular/core';
import { Persona } from '../input-parent-child/persona';

@Component({
  selector: 'app-output-child-parent',
  templateUrl: './output-child-parent.component.html',
  styleUrls: ['./output-child-parent.component.css']
})
export class OutputChildParentComponent {

  personas: Persona [] = [
    new Persona ('Andrés', 'Martínez'),
    new Persona ('Mario', 'Martínez')
  ];

  personaCreada(persona: Persona){
    this.personas.push(persona)
  }
}
