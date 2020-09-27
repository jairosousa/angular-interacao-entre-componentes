# Interacao Entre Componentes

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

Neste artigo vamos falar um pouco sobre a Interação entre componentes no Angular, que nada mais é do que uma forma de trocar informações entre componentes durante a execução da aplicação.

## Introdução

No Angular a interação entre componentes é uma técnica que permite aos componentes trocarem informações entre si. Durante este artigo nós utilizaremos dois componentes, pai e filho, que servirão como base para os diversos exemplos que serão apresentados e que nos ensinarão técnicas de comunicação entre componentes. Esses componentes serão utilizados apenas a nível de exemplo, para que tenhamos como demonstrar tais técnicas. Por isso, começaremos criando um projeto com esses dois componentes e depois faremos modificações em seus códigos a fim de que eles troquem informações entre si.

## Criando e configurando o projeto

Como vimos, para utilizarmos a técnica de interação entre componentes precisamos de um projeto que possua pelo menos dois componentes, e é isso que criaremos agora.

```Bash
1 | ng new interacao-entre-componentes
```
Com o projeto criado, precisaremos criar dois componentes, que chamaremos de pai e fiho. Para isso, usaremos os comandos abaixo:

```Bash
1 | ng generate component pai
```
```Bash
1 | ng generate component filho
```


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
