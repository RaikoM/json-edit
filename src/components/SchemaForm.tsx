import React from 'react';
import Form from '@rjsf/material-ui';
import { JSONSchema7 } from 'json-schema';
import { IChangeEvent } from '@rjsf/core';

const schema: JSONSchema7 = {
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string'
    }
  },
  additionalProperties: {
    type: 'string'
  }
};

const SchemaForm = () => {
  const handleSubmit = (values: IChangeEvent) => {
    console.log('submit', values.formData);
  };

  const handleError = () => {
    console.log('error happened');
  };

  return <Form schema={schema} onSubmit={handleSubmit} onError={handleError} />;
};

export default SchemaForm;
