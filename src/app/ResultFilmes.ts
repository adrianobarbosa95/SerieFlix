export class ResultFilmes {
  page !: number;
  total_pages !: string;
  total_results !: number;
  results !: [];
  // results ! : {page: number, results: [], total_pages: number, total_results: number} ;
  constructor( page : number, total_pages : string, total_results : number, results : []) {
    this.page = page;
    this.total_pages = total_pages;
    this.total_results = total_results;
    this.results = results;
  }

}