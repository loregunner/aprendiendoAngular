import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

@Input() number1: number;
@Input() number2: number;
@Input() total: number;
@Input() inicio: number;
@Output() terminaCronometro: EventEmitter<string>;
contador: number
mensaje: string;
 

constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.total = 0;
    this.contador= 10;
    this.inicio = 10;
    this.terminaCronometro = new EventEmitter()
    this.mensaje= "este es el mensaje con el mouseenter"
  }

  ngOnInit(): void {
    this.contador = this.inicio ? this.inicio: 10;
  }

onStart() {
  let interval = setInterval(() => 
  {this.contador--
 if(this.contador=== 0){
   clearInterval(interval)
   this.contador = this.inicio
   this.terminaCronometro.emit('Finaliza el cronometro' + this.inicio)
 }
 }
, 1000)
}

onClickedOutside(e: Event) {
  this.mensaje = 'click afuera'
}

onClick() {
  this.total = this.number1 + this.number2;
  
}

evento(e: any) {
  console.log('click');
  console.log(e); 
}

onChange(e: any){
  console.log(e.target.value);
  

}

onMouseEnter() {
  this.mensaje = "cuando paso el moues este mensaje cambio"
  
}

onMouseOut() {
  this.mensaje = "sali del div con mouseout"
}

onChangeInput(e: any){
  //console.log(e.target.value);
  }

onFocus(){
console.log("focus");

}

onBlur(){
 console.log("no focus");
 
}
onInput(e: any){
 this.mensaje = e.target.value
  
}
}