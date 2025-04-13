Estamos iniciando a nossa quinta aula. Nesse momento, dê play na videoaula para:

- entender os conceitos e a sintaxe necessários para mapear uma lista de itens e renderizá-las individualmente;
- dominar o uso de map() para renderização de listas em React;
- compreender o conceito e a importância de chaves (keys) em elementos renderizados.

## Use map

Para renderizar dados brutos como números, _strings_ e propriedades de objetos no JSX, utilizamos o conjunto de **chaves**, porém isso não funciona quando temos que renderizar itens de um _array_.

Para renderizar vários itens precisamos utilizar o **map** e retornar para cada item do array um elemento React.

```
function Produtos() {
  const items = ["Celular", "TV", "PS5"];

  return (
    <>
      <h3>Produtos</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
```

No exemplo, temos o atributo key na LI, isso é necessário para que o React saiba gerenciar os elementos renderizados a partir de uma iteração. Geralmente utilizamos um ID que virá de uma integração com o Back-End. Caso não possuirmos um ID devemos utilizar algum valor único, que não se repita na lista.