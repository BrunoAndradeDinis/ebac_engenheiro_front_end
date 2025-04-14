## Sobre o CSS Modules

No React podemos utilizar o CSS comum, importamos ele no código JavaScript: 
```
import ‘./main.css’;
```

Porém podemos ter casos de **colisões**, onde é necessário o uso da palavra **!importante**, com o CSS Modules criamos um CSS para cada componente. 

Um arquivo CSS Modules deve determinar com .module.css e fazemos a importação dele como se fosse um código JavaScript: 
```
import estilos from ‘./botao.module.css’; 
```
E ao utilizar a classe CSS passamos ela no atributo className:
```
<button className={estilos.botaoPrincipa}>
```

Passamos o nome da classe como se fosse uma propriedade de objeto, não podendo utilizar o traço para separar, utilizamos o padrão camelCase. 

Além disso no React não podemos utilizar simplesmente class=“” a palavra class já existe no JavaScript e está relacionada a orientação a objetos, por isso temos o **className** para evitar conflitos.