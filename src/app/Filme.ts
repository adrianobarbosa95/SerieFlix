export class Filme {

  original_title: string;
  overview: string;
  imagem: string;
  id: number;
  constructor(original_title: string, overview: string, imagem: string, id: number) {
    this.original_title = original_title;
    this.overview = overview;
    this.imagem = imagem;
    this.id = id;
    // this.results = total_pages;
    // this.results = total_results;
    // this.results = results;
  }

}