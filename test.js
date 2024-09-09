// Primeira Questão
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

// Segunda Questão

//a) 1, 3, 5, 7, 9 -> a prograssão é de números ímpares
//b) 2, 4, 8, 16, 32, 64, 128 -> é uma progressão onde o número seguinte é o dobro do anterior
//c) 0, 1, 4, 9, 16, 25, 36, 49 -> são os números de 0 à 7 elevados ao quadrado
//d) 4, 16, 36, 64, 100 -> São os números pares 2, 4, 6, 8 elevados ao quadrado
//e) 1, 1, 2, 3, 5, 8, 13 -> os números são a soma dos dois números aanteriores
//f) 2, 10, 12, 16, 17, 18, 19, 200 -> todos os números começam com a letra d

// Terceira Questão

function analisarFaturamento(faturamentoDiario) {
  const diasComFaturamento = faturamentoDiario.filter((valor) => valor > 0);

  const menorValor = Math.min(...diasComFaturamento);
  const maiorValor = Math.max(...diasComFaturamento);

  const soma = diasComFaturamento.reduce((total, valor) => total + valor, 0);
  const media = soma / diasComFaturamento.lengh;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (valor) => valor > media
  ).lengh;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
  };
}

//Quarta Questão

//Criaremos 4 tabelas, uma para o cliente com id, nome e estado_id, um para o estado com id, nome e sigla, a terceira tabela para o telefone com id, cliente_id, numero e tipo_telefone_id e a última tabela com os tipos de telefone, teremos um id e descrição
//Tabela CLIENTE       Tabela ESTADO       Tabela TELEFONE           tabela TIPO_TELEFONE
//id (PK)              id(PK)              id(PK)                    id(PK)
//nome                 nome                cliente_id(FK)            descricao
//estado_id(FK)        sigla               numero
//                                         tipo_telefone(FK)

//Um cliente pode ter diversos telefones; um cliente pertence a um estado; um telefone é de um TIPO_TELEFONE

// QUERY para filtrar o cliente

//SELECT CLIENTE.id AS codigo_cliente, CLIENTE.nome, TELEFONE.numero AS telefone
//FROM CLIENTE JOIN ESTADO ON CLIENTE.estado_id = ESTADO.id
//LEFT JOIN TELEFONE ON CLIENTE.id = TELEFONE.cliente_id
//WHERE ESTADO.sigla = "SP" ORDER BY CLIENTE.nome, TELEFONE.numero;

// Quinta Questão

// Ao se cruzarem os veículos estarão no mesmo ponto, ou seja, os dois veículos estarão na mesma distância de ribeirão preto
