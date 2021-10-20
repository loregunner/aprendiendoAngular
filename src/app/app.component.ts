import { Component, Input } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titulos: string[];
  number2: number;
  campoTexto: string;
  persona: any;
  @Input() listData: Tarea[] = [];
  propiedadesParrafo: any;
  mostrar: boolean;

  constructor() {
    this.titulos = ['zero two', 'namkyun', 'Alex' ]
    this.number2 = 8
    this.campoTexto = 'Valor inicial';
    this.persona = {};
    this.propiedadesParrafo = {color: 'red', fontSize: '24px'}
    this.mostrar = false;  
  }

onMostrar(){
  this.mostrar = !this.mostrar
}

cambiaColor(color: string){
  switch(color){
    case 'a':
      this.propiedadesParrafo.color = 'yellow';
      break;
    case 'r':
      this.propiedadesParrafo.color = 'red';
      break;
    case 'v':
      this.propiedadesParrafo.color = 'green';
      break;
  }
}
onRange(e: any){
   this.propiedadesParrafo.fontSize = `${e.target.value}px`
   
}
onAlertaPulsada(e: any){
  console.log(e);
  
}

onClick(): void{
  this.campoTexto = 'Lore aprende super bien'
}


onClickSave(e: any): void{
  this.listData.push(e);
  
}
onTerminaCronometro(e: any){
  console.log(e);
  
}

}
