const assert = require('assert');
const app = require('../../src/app');

describe('\'exercise\' service', () => {
  it('registered the service', () => {
    const service = app.service('exercise');

    assert.ok(service, 'Registered the service');
  });
});
