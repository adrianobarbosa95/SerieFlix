import { Component, OnInit } from '@angular/core';
import { EmitterServiceService } from 'src/app/services/emitter-service.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    console.log( EmitterServiceService.get('verImagemService').subscribe((value: any)  => console.log(value))
   
    );
  }
  ngOnDestroy() {
    EmitterServiceService.get('verImagemService')
      .unsubscribe()
  }
}
