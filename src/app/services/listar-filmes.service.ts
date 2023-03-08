import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { ResultFilmes } from '../ResultFilmes';
import { Filme } from '../Filme';

@Injectable({
  providedIn: 'root'
})


export class ListarFilmesService {
     private url = "https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=<chaveapi>=";
  private url2 = "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";

  constructor(private _httpClient: HttpClient) { }
  public getFilmes(filme: string): Observable<ResultFilmes> {

    return this._httpClient.get<ResultFilmes>(this.url+filme);
  }

  public getFilmesId(id: number): Observable<Filme> {
this.url = "https://api.themoviedb.org/3/movie/"+id+"?api_key=<chaveapi>&language=pt-BR&";
    return this._httpClient.get<Filme>(this.url);
  }
}
