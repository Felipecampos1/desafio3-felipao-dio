/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se wizard -> no ataque exibir (usando magia)
se warrior -> no ataque exibir (usando espada)
se Mage -> no ataque exibir (uusando feitiço)
se ninja -> no ataque exibir (usando shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mage atacou usando magia
  warrior atacou usando espada*/

  class heroePlayer{
    constructor(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack(){
    let attack = '';

    if(this.type === 'wizard'){
      attack = 'usando magia';
    }
    if(this.type === 'warrior'){
      attack = 'usando espada';
    }
    if(this.type === 'mage'){
      attack = 'usando feitiço';
    }
    if(this.type === 'ninja'){
      attack = 'usando shuriken';
    }

    console.log(`o ${this.name} atacou ${attack}`);
  }
}

let wizard = new heroePlayer('Harry Potter', 25, 'wizard');
let warrior = new heroePlayer('Hércules', 19, 'warrior');
let mage = new heroePlayer('Doctor Stranger', 50, 'mage');
let ninja = new heroePlayer('Scorpion', 47, 'ninja');

wizard.attack();
warrior.attack();
mage.attack();
ninja.attack();