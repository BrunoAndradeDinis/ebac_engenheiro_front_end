Estamos iniciando a nossa quarta aula. Nesse momento, dê play na videoaula para: 

- conceituar useEffect e hook;
- especificar variáveis ou estados que devem ser monitorados para acionar a execução do código dentro do useEffect;
- escolher as dependências para garantir que o código seja executado quando necessário e evite loops infinitos;
- assimilar como o useEffect se relaciona com o ciclo de vida do componente React;
- executar código quando o componente é montado, atualizado ou desmontado.

## Sobre o UseEffect

O useEffect nos possibilita executar uma ação após determinado evento, por exemplo executar um código ao montar o componente, executar uma ação ao alterar um estado. Quando utilizamos o useEffect sem argumentos, ele será executado a cada mudança no estado do componente:

```
useEffect(() => { 
  console.log(“o componente foi atualizado”); 
})
```

Para fazer com que o useEffect seja executado apenas quando determinado dado for alterado, devemos passar um array como segundo argumento e dentro deste array informar o dado que iremos observar:
```
useEffect(() => { 
  console.log(“o nome foi atualizado”); }, 
  [nome])
  
  useEffect(() => { 
    console.log(“as props foram atualiazadas”); 
  }, [props])
```

Quando passamos um array vazio, o useEffect será executado ao montar o componente. 

```
useEffect(() => { 
  console.log(“o componente foi atualizado”); 
}, []) 
```

Tanto o useState como useEffect devem estar dentro da função do componente, mas fora do return.

```
function Formulario() {       
  const [idade, setIdade] = useState(0); 
  useEffect(() => {      
    console.log(“a idade mudou”); 
  }, [idade]); 
    
  return (      
    <input          
    type=“number”             
    onChange={e => setIdade(e.target.value)}         
    />    
  )
}
```