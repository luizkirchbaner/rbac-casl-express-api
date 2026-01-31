# Sobre o Projeto

Este projeto mostra, na prática, como implementar autorização em uma API REST com Express usando CASL. A ideia é ter um exemplo simples de entender, mas próximo de um cenário real de produção.

As regras de acesso não ficam presas no código. Elas são armazenadas no banco de dados, permitindo alterar permissões sem precisar modificar ou fazer deploy da aplicação.

### O que é CASL

CASL é uma biblioteca de autorização baseada em abilities, onde definimos o que um usuário pode ou não pode fazer sobre determinados recursos.

Com ela é possível controlar ações como criar, ler, atualizar e remover dados, além de aplicar regras mais granulares e dinâmicas, sem depender apenas de roles fixas.

### Como está sendo usado no projeto
A API utiliza:

- JWT para autenticação
- Banco de dados para armazenar permissões
- CASL para montar as abilities dinamicamente
- Middleware para proteger as rotas

A cada requisição, as permissões do usuário são carregadas, as abilities são criadas e o middleware valida se a ação é permitida antes de chegar ao controller.

### Status do Projeto
O projeto se encontra na fase de desenvolvimento.

### Tecnologias
- Node.js + TypeScript
- Express
- CASL
- Zod (validação e serialização)
- Swagger (documentação)

## Requisitos
- Node na versão 22

## Setup

1° - Instalar as dependências
Com o container em execução, instale todas as dependências necessárias do projeto:
```bash
npm install
```
O banco SQLite é criado automaticamente como arquivo local (rbac_casl.sqlite).

2° - Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e defina as variáveis abaixo para configurar a aplicação e a conexão com o banco de dados:

```bash
PORT=3000
JWT_SECRET=your_jwt_secret_here
```

### Gerando uma chave secreta para JWT
```bash
openssl rand -hex 64
```

3° Migrations
Execute as migrações para criar os registros do banco de dados:
```bash
npm run m:run
```

## Desenvolvimento

Para iniciar o projeto rode:

```bash
npm run dev
```

- #### A API estará disponível em:

  http://localhost:3000

- #### A documentação estará em:

  http://localhost:3000/docs

## Estrutura do projeto

```bash
src/
  core/        Configurações como servidor, cors, swagger
  features/    Funcionalidades organizadas por domínio
  shared/      Utilidades, middlewares e validações

```
