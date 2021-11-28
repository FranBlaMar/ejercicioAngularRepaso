import { Injectable } from '@angular/core';
import { Regalo } from '../interfaces/listar-regalos.interface';

@Injectable({
  providedIn: 'root'
})
export class RegalosService {
  private listaRegalosAnonimo: Regalo[] = [];
  private listaRegalosNoAnonimo: Regalo[] = [];

  constructor() {
  }

  get regalosAnonimo(): Regalo[]{
    return [...this.listaRegalosAnonimo];
  }

  get regalosNoAnonimo(): Regalo[]{
    return [...this.listaRegalosNoAnonimo];
  }


  añadirDonacion(donacion: Regalo){
    if (donacion.anonimo == "si"){
      donacion.autor = "Anónimo";
      this.listaRegalosAnonimo.push(donacion);
    }
    else{
      this.listaRegalosNoAnonimo.push(donacion);
    }
  }

}
