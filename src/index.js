import {introspectionQuery} from 'graphql/utilities';

export default (graphql, schema) => {
  if (!schema) {
    throw new Error('QL-Schema-Middleware requires a schema.');
  }

  return async (req, res) => {
    const result = await (graphql(schema, introspectionQuery));

    if (result.errors) {
      res.send({error: 'ERROR introspecting schema'});
    } else {
      res.send(JSON.stringify(result, null, 2));
    }
  };
};
