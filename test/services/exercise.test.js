const assert = require('assert');
const app = require('../../src/app');

describe('\'exercise\' service', () => {
  it('registered the service', () => {
    const service = app.service('exercise');
    assert.ok(service, 'Registered the service');
  });

  it('should create a model', () => {
    //const exerciseService = app.service('exercise');
    // exerciseService.create({name:'Bench Press'});
  }); 

  it('should connect routine with excercise', (done) => {
    //const exerciseService = app.service('exercise');
    //const ex = exerciseService.get('59e53f1622f6d840c6c3359e');
    //assert.ok(ex, 'Found the exercise');  
    const routineService = app.service('routine');
    routineService.get('59e4c109c1d9dcfb4e7c31b9').then( 
      (res) => {
        assert.ok(res, 'Found the routine'); 
        done();
      }
    );
    
  });
});
