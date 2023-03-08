import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/Filme';
import { ResultFilmes } from 'src/app/ResultFilmes';
import { EmitterServiceService } from 'src/app/services/emitter-service.service';
import { ListarFilmesService } from 'src/app/services/listar-filmes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() nome!: string;
  filmes: Filme[] = [];
  @Input() filme: string = '';

  constructor(private _listarFilmes: ListarFilmesService) {
    console.warn('entrou no contrutor do card');

  }
  ngOnInit(): void {
    console.error("entrei no onit do card");
 
    
  }
 

  buscar(event: Event){
    event.preventDefault();
   
    this._listarFilmes.getFilmes(this.filme).subscribe(
      retorno => {
         
        console.log(retorno);
        
        this.filmes = retorno.results.map(
          film => {

            console.log(new Filme(film['original_title'], film['overview'], film['poster_path'],  film['id']  ));
            
            return new Filme(film['original_title'], film['overview'] , film['poster_path'], film['id'] )
          })

      }

    );
 
   
  }
  
  verImagemService(id: number) {
  
  
    console.log('emite enviado', EmitterServiceService.get('verImagemService').emit(id));
    console.log('emite enviado', EmitterServiceService.get('verImagemService'));
  }

  
  verImagemId(id: number) {
    console.log(id);

    this._listarFilmes.getFilmesId(id).subscribe(
      retorno => {
         
        console.log(retorno);
        
        this.filmes.push(retorno);

      }

    );
    // EmitterServiceService.get('verImagem').emit(filme)
  }
  


}
