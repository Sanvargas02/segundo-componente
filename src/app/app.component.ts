import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './common/interface';
import { SharingService } from './core/services/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private sharingService: SharingService) {

    //Estamos cambiando el valor de nuestro observable,
    //Se toma el últmo valor que se coloque
    sharingService.sharingObservableData = { name: 'La información cambió' };

  }

}
