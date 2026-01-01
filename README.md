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

1° - Crie o container do mysql executando o comando abaixo na raiz do projeto
```bash
  docker compose up -d
```

2° - Instale as dependências do projeto

```bash
npm install
```

3° - Configure as variaveis de ambiente adicionando o arquivo .env na raiz com os seguintes valores:

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=app_user
DB_PASS=app_password
DB_NAME=express_api
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