# ql-schema-middleware
A middleware for generating your GraphQL schema.json file for relay.

> "Inspired" by this script: [relay-starter-kit/scripts/updateSchema.js](https://github.com/relayjs/relay-starter-kit/blob/master/scripts/updateSchema.js).

## Installation

[Use npm](https://docs.npmjs.com/cli/install).

```sh
npm install ql-schema-middleware
```

## Usage

Use with express:

```javascript
import {
  graphql
  GraphQLSchema,
} from 'graphql';
import express from 'express';
import qlSchemaMiddleware from 'ql-schema-middleware';

const schema = new GraphQLSchema({
  query: ...
});
const server = express();

server.use('/schema', qlSchemaMiddleware(graphql, schema));

server.listen(3000);
console.log(`Alive and well on port: 3000`);
```

Or curl & pipe to a file:

```sh
curl http://localhost:3000/schema -o schema.json
```
