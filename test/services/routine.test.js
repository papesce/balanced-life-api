const assert = require('assert');
const app = require('../../src/app');

describe('\'routine\' service', () => {
  it('registered the service', () => {
    const service = app.service('routine');

    assert.ok(service, 'Registered the service');
  });
});
