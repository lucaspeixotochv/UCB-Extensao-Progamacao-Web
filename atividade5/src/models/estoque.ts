import { IEstoque, IProduto } from "../types/estoque.type";

export const estoque: IEstoque = {
  produtos: [],
};

export class Estoque {

  private estoque : IEstoque = {
    produtos: []
  };

  constructor(){}

  adicionarProduto(produto: IProduto) : void
  {
    this.estoque.produtos.push(produto);
    return;
  }

  listar() : IEstoque
  {
    return this.estoque;
  }

  remover(id: string) : boolean
  {
    const index = this.estoque.produtos.findIndex((produto) => produto.id === id);

    if (index === -1) {
      return false;
    }
  
    this.estoque.produtos.splice(index, 1);
  
    return true;
  }

  editar(id: string, qtd: number): boolean
  {
    const produto = this.estoque.produtos.find((produto) => produto.id === id);

    if (!produto) {
      return false;
    }
  
    produto.qnt = qtd;

    return true
  }


}