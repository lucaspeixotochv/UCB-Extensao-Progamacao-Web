export interface IEstoque {
  produtos: IProduto[];
}

export interface IProduto {
  id: string;
  nome: string;
  qnt: number;
}
