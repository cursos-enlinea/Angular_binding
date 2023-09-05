import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  mensaje = 'No se ha agregado nada'

  agregarMensaje(){
    this.mensaje = 'Nuevo mensaje agregado'
  }
}
