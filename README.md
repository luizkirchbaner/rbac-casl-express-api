# Express CASL API

API REST construída com Express e TypeScript, estruturada para uso do CASL no controle de permissões.

O projeto utiliza arquitetura modular, validação com Zod, documentação automática com Swagger e suporte a variáveis de ambiente.

### Status do Projeto
O projeto se encontra na fase de desenvolvimento.

### Tecnologias
- Node.js + TypeScript
- Express
- CASL (autorização)
- Zod (validação e serialização)
- Swagger (documentação)

## Requisitos
- Node na versão 22
- Docker
- Docker compose

## Setup

1° - Subir o banco de dados MySQL
Na raiz do projeto, execute o comando abaixo para criar e iniciar o container do MySQL em segundo plano:
```bash
docker compose up -d
```

2° - Instalar as dependências
Com o container em execução, instale todas as dependências necessárias do projeto:
```bash
npm install
```

3° - Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e defina as variáveis abaixo para configurar a aplicação e a conexão com o banco de dados:

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=app_user
DB_PASS=app_password
DB_NAME=express_api
```

4° Migrations
Execute as migrações para criar as tabelas do banco de dados:
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
# Migrations

## Criando uma migration
```bash
npm run m:create src/core/database/migrations/CreateUsersTable
```