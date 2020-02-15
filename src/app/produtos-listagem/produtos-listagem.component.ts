import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.css']
})
export class ProdutosListagemComponent implements OnInit {

  produtos: Array<any>;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

    this.listar();

  }

  listar(){

    this.produtoService.listar().subscribe(dados => this.produtos = dados);
    
  }

}
