import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegalosService } from './services/regalos.service';
import { FormsModule } from '@angular/forms';
import { FormularioRegalosComponent } from './formulario-regalos/formulario-regalos.component';
import { MostrarDonacionesComponent } from './mostrar-donaciones/mostrar-donaciones.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    FormularioRegalosComponent,
    MostrarDonacionesComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ],
  providers:[
    RegalosService
  ]

})
export class ListarRegalosModule { }
