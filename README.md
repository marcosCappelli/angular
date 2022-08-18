# CursoAngular                                          
![angular](https://user-images.githubusercontent.com/49313740/184141450-41f509c3-37b9-4ebb-9c4a-49d3a45c6ca1.png)
## Instalação
npm install -g @angular/cli
## Criação
ng new
## Servidor
ng serve
______________________________________________________________________________________________________________________________________________________________________
## Estrutura do Angular
node_modules: dependências do projeto;

src: onde vamos progrmar a aplicação;

src/app: pasta principal para componentes, services e etc;

Os componentes são divididos em partes: TS, HTML, CSS e Testes;
## Criando componente
Para criar um componente podemos utilizar o CLI;

O comando é: ng generate component components/nome do componente

Todos os arquivos necessários serão criados no projeto;

Para importar o componente basta utilizar o seu selector em um HTML de outro componente;
## CSS no Angular
Os estilos em aplicações de angular podem ser feitos de duas maneiras;

GLOBAL: utilizando o arquivo styles.css, que fica em SRC;

SCOPED: estilos a nível de componente, criamos quando damos um generate;
## Compartilhamento dados
Em angular podemos compartilhar dados do componente pai com o componente filho;

Para isso, vamos disponobilizar na chamada do componente o nome do  dado que será recebido com a seguinte sintaxe: [dado];

E no código .ts do componente filho vamos utilizar o decorator @Input, que tem como papel entregar o dado para o template;
## Diretivas
Em angular temos um recurso chamdo diretivas;

Que podem realizar diversas funções no sistema, como aplicar estilos a um elemento;

Elas começam sempre com ng, o nome fica como: ngAlgumaCoisa;
## Renderização condicional
É possível exibir determinado conteúdo por meio de uma condicional;

Utilizamos a diretiva ngIf para isso;

Os valores podem ser dinâmicos (propriedades), mas podemos realizar outros tipos de comparação;

Há a possibilidade também de imprimir um cenário para validação de falso, como o else;
## Eventos
Podemos ativar eventos nos componentes para disparar algum método;

Um evento clássico que utilizamos muito é o click;

A sintaxe é: (click)="algumaFuncao()"

Os métodos ficam na classe;

Esse recurso é usado para acessar API´s
## Loop
Outro recurso importante é o loop em listas;

Para isso vamos precisar de uma propriedade com os itens da lista;

E no template do componente vamos utilizar o "ngFor";

A sintaxe é: "ngFor="let item of items"

Desta maneira podemos renderizar template baseado em dados;
## Importância das interfaces
Toda entidade que vamos trabalhar precisa de uma interface;

Isso vai tornar nosso código maos simples ao longo do programa;

Padronizando ele e facilitando a manutenção;

Vamos implementar uma interface a nossa lista de animais;

E fazer um evento que também utilizará este recurso;



_________________________________________________________________________________________________________________________________________________________________________
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
