import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

resultado: string;
calculoFinalizado: boolean;
  constructor() {
    this.resultado = '';
    this.calculoFinalizado = false;
   }

  ngOnInit(): void {
  }

onClick(e: any): void {
  if(this.calculoFinalizado){
    this.resultado = e.target.innerText;
    this.calculoFinalizado = false;
  }else{
    this.resultado = this.resultado + e.target.innerText;
  }
  
}
onResultado(): void{
  this.resultado = eval(this.resultado);
  this.calculoFinalizado = true;
}
}
