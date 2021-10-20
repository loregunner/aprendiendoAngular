import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

 @Input() mensaje: string;
 @Input() subtitulo: string;
 @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.mensaje = 'Mensaje de la alerta por defecto'
    this.subtitulo = 'Valor de subtitulo';
    this.alertaPulsada= new EventEmitter();
  }

  ngOnInit(): void {
  }
onClick(){
  this.alertaPulsada.emit('La alerta a sido pulsada');
}

}
