const test = require('ava');

const BemEntityName = require('../index');

test('should create incomplete entity names for blocks', t => {
    /*eslint no-new: 0*/
    new BemEntityName({ block: null });
});

test('should create incomplete entity names for elements', t => {
    /*eslint no-new: 0*/
    new BemEntityName({ block: null, elem: 'elem' });
});
