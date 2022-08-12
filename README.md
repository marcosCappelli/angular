# CursoAngular                                          
![angular](https://user-images.githubusercontent.com/49313740/184141450-41f509c3-37b9-4ebb-9c4a-49d3a45c6ca1.png)
## Instalação
npm install -g @angular/cli
## Criação
ng new
## Servidor
ng server
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
## Interpolação de dados
A interpolação de dados é um recurso que vai nos ensinar a trabalhar com os componentes de Angular;

Vamos criar nossas varáveis no arquivo .ts, dentro da classe;

Ou seja, estas variáveis são propriedades da classe;

E então teremos acesso a estes dados no arquivo .html, o template;

A impressão é feita através de: {{ dado }} 
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
