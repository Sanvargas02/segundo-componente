import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from 'src/app/common/interface';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  //Un observable -> Si emites información no te suscribas ahí mismo, mejor crea otro observable distinto, de otra forma ocurre un error de ciclo infinito de emitir y recibir información.
  private sharingObservableProperty: BehaviorSubject<Persona> = new BehaviorSubject<Persona>({ name: 'Santiago Vargas' });

  constructor() { }

  //Sólo escucha y no se modifica
  get sharingObservable() {
    return this.sharingObservableProperty.asObservable(); //Se convierte en Observable
  }

  //Cambia el Valor
  set sharingObservableData(data: Persona) {
    this.sharingObservableProperty.next(data); //Se emite un Nuevo Valor
  }

}
