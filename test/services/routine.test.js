const assert = require('assert');
const app = require('../../src/app');

describe('\'routine\' service', () => {
  it('registered the service', () => {
    const service = app.service('routine');

//Promise.all([
//  routines.create({ name: 'Chest and Triceps' }),
//  routines.create({ name: 'Back and Biceps' })
//])
    assert.ok(service, 'Registered the service');
  });
});
