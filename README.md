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

Para desenvolvimento, você precisará apenas do Node.js e de um pacote global do Node, o NPM, instalados em seu ambiente.

## Instalação

Para instalar as dependências do projeto rode:

```bash
npm install
```

## Ambiente

Crie um arquivo .env na raiz:

```bash
PORT=3000
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
