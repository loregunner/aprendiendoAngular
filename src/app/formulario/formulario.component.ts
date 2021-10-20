import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  listTaks: Tarea;

  @Output() saveData: EventEmitter<Tarea>;

  constructor() {
    this.listTaks = new Tarea();
    this.saveData = new EventEmitter()
   }

  ngOnInit(): void {
  }

formSave() :void{
  this.saveData.emit(this.listTaks)
  this.listTaks = new Tarea();
  
}

}
