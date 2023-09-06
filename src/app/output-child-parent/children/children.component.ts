import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/input-parent-child/persona';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  onSubmit(form: NgForm){
    const f = form.value;
    const persona = new Persona(f.nombre, f.apellido);
    this.personaCreada.emit(persona);
    form.reset()
  }

}
