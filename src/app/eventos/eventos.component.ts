import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

number1: number;
number2: number;
total: number;
number3: number;
mensaje: string;
 

constructor() {
    this.number1 = 78;
    this.number2 = 3;
    this.total = 0;
    this.number3= 9;
    this.mensaje= "este es el mensaje con el mouseenter"
  }

  ngOnInit(): void {
  }

onStart() {
  let interval = setInterval(() => 
  {this.number3--
 if(this.number3 === 0){
   clearInterval(interval)
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