import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/common/interface';
import { SharingService } from 'src/app/core/services/sharing.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent {

  public data$: Observable<Persona>;

  constructor(private sharingService: SharingService) {

    this.data$ = sharingService.sharingObservable; //Estamos recibiendo los datos del sharing Observable

  }

}
