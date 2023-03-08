import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  @Input() titlePage: string ='Series da SerieFlix';

  constructor () {
    console.warn('entrou no contrutor da serie', this.titlePage);
    
  }
  ngOnInit(): void {
 console.warn("entrei no onit da serie", this.titlePage  );
 
  } 

}
 