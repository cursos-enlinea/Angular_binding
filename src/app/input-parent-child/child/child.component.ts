import { Component, Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() persona!: Persona;
  @Input() indice!: number;
}
