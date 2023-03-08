import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() cor: string = '';
  title = 'SerieFlix';
  tema = false;

  
  changeColor(){ 

    document.body.style.backgroundColor = this.cor;
      }
}
