# ProjetoTransformese

Projeto Final do Transforme-se, com o objetivo de criar um site modular e escalável, utilizando boas práticas de organização de pastas. O site contém páginas para cadastro, login, SAC, questionário, controle de gasto e informações sobre o projeto.

---

## Descrição

Control Money é um site para gerenciamento financeiro pessoal, permitindo que o usuário registre gastos, controle seu orçamento, responda questionários e tenha acesso a funcionalidades como cadastro, login e suporte ao cliente (SAC). O projeto foca em organização modular de código, com HTML, CSS e JavaScript, seguindo boas práticas de estruturação de pastas.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Estrutura modular de pastas inspirada em React

---

## Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge)
- Servidor local (opcional, para testes com JavaScript)

---

* Estrutura de pastas

A estrutura de pastas foi organizada com o objetivo de se aproximar do padrão utilizado em projetos React, tornando o código mais organizado, modular e escalável.
Todas as páginas devem estar dentro da pasta pages/, cada uma em seu respectivo diretório.
O arquivo principal de cada página deve seguir o padrão page.html.
Ao criar novas pastas, deve-se manter o padrão de nomenclatura em kebab-case (substituindo espaços por hífens) para garantir consistência e boas práticas de organização.


```bash
ProjetoTransformese/
│
├── css/           # Estilos globais do projeto
├── js/            # Scripts globais do projeto
├── img/           # Imagens do projeto
│
├── pages/         # Páginas específicas do site
│   ├── cadastro/
│   │   ├── css/ # Estilos da página
│   │   ├── js/  # Scripts da página
│   │   └── page.html
│   │
│   ├── login/
│   ├── sac/
│   ├── sobre-nos/
│   ├── questionario/
│   └── controle-de-gasto/
│
├── index.html
├── LICENSE
└── README.md
```
