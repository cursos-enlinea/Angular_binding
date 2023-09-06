import { Component } from '@angular/core';
import { Persona } from './persona';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-parent-child',
  templateUrl: './input-parent-child.component.html',
  styleUrls: ['./input-parent-child.component.css']
})
export class InputParentChildComponent {
  personas: Persona [] = [
    new Persona ('Xinia', 'Vargas'),
    new Persona ('Daniel', 'Martínez')
  ];

  processForm!: FormGroup;

  onSubmit(form: NgForm){
    const f = form.value;
    const persona = new Persona(f.nombre, f.apellido);
    this.personas.push(persona);
    form.reset()
  }
}
