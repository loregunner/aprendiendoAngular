import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { EventosComponent } from './eventos/eventos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AlertComponent } from './alert/alert.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { MainComponent } from './main/main.component';
import { SemaforoComponent } from './semaforo/semaforo.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent,
    CalculadoraComponent,
    AlertComponent,
    FormularioComponent,
    ListaComponent,
    MainComponent,
    SemaforoComponent
  ],
  imports: [
    BrowserModule, ClickOutsideModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
