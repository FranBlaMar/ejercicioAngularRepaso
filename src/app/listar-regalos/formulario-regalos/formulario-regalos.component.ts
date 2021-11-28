import { Component, OnInit } from '@angular/core';
import { Regalo } from '../interfaces/listar-regalos.interface';
import { RegalosService } from '../services/regalos.service';

@Component({
  selector: 'app-formulario-regalos',
  templateUrl: './formulario-regalos.component.html',
  styleUrls: ['./formulario-regalos.component.css']
})
export class FormularioRegalosComponent implements OnInit {

  donacion: Regalo ={
    nombre:"",
    autor:"",
    anonimo: ""
  }

  constructor(private donacionService: RegalosService) { }

  ngOnInit(): void {
  }

  anadir(){
    this.donacionService.añadirDonacion(this.donacion);

    this.donacion ={
      nombre:"",
      autor:"",
      anonimo: ""
    }
    
  }
}
