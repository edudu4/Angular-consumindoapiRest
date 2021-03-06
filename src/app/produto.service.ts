import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosUrl = 'https://produtosrestapi.herokuapp.com/api/produtos';

  constructor( private http: HttpClient ) { }

  listar(){

    return this.http.get<any[]>(`${this.produtosUrl}`);
  
  }
}
