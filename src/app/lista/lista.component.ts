import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() data: Tarea[] = [];
 
  constructor() { }

  ngOnInit(): void {
  }

}
