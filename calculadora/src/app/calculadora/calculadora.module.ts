import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora';
import { CalculadoraService } from './services';


@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CalculadoraComponent
  ],
  providers:[
    CalculadoraService
  ]
})
export class CalculadoraModule { }
