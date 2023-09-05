import { Component } from '@angular/core';

@Component({
  selector: 'app-event-with-data',
  templateUrl: './event-with-data.component.html',
  styleUrls: ['./event-with-data.component.css']
})
export class EventWithDataComponent {
  mensaje = "mensaje default"
  modificarTexto(event: Event){
    this.mensaje = (<HTMLInputElement> event.target).value
  }
}
