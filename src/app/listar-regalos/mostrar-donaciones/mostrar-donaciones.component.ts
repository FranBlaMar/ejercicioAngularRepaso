import { Component, OnInit } from '@angular/core';
import { Regalo } from '../interfaces/listar-regalos.interface';
import { RegalosService } from '../services/regalos.service';

@Component({
  selector: 'app-mostrar-donaciones',
  templateUrl: './mostrar-donaciones.component.html',
  styleUrls: ['./mostrar-donaciones.component.css']
})
export class MostrarDonacionesComponent implements OnInit {

  constructor(private donacionService: RegalosService) { }

  ngOnInit(): void {
  }
  get donacionesAnonimas(): Regalo[]{
    return this.donacionService.regalosAnonimo;
  }

  get donacionesNoAnonimas(): Regalo[]{
    return this.donacionService.regalosNoAnonimo;
  }
}
