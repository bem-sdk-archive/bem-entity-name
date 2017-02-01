import test from 'ava';

import BemEntityName from '../index';

test('should resolve belonging between elem and block', t => {
    const entity1 = new BemEntityName({ block: 'block' });
    const entity2 = new BemEntityName({ block: 'block', elem: 'elem' });

    t.true(entity2.belongsTo(entity1));
    t.false(entity1.belongsTo(entity2));
});

test('should not detect belonging between two block', t => {
    const entity1 = new BemEntityName({ block: 'block2' });
    const entity2 = new BemEntityName({ block: 'block' });

    t.false(entity1.belongsTo(entity2));
    t.false(entity2.belongsTo(entity1));
});

test('should resolve belonging between block and its mod', t => {
    const entity1 = new BemEntityName({ block: 'block' });
    const entity2 = new BemEntityName({ block: 'block', modName: 'mod', modVal: 'key' });

    t.true(entity2.belongsTo(entity1));
    t.false(entity1.belongsTo(entity2));
});

test('should resolve belonging between elem and its mod', t => {
    const entity1 = new BemEntityName({ block: 'block', elem: 'el' });
    const entity2 = new BemEntityName({ block: 'block', elem: 'el', modName: 'mod', modVal: 'key' });

    t.true(entity2.belongsTo(entity1));
    t.false(entity1.belongsTo(entity2));
});

test('should resolve belonging between boolean and key-value mod of block', t => {
    const entity1 = new BemEntityName({ block: 'block', modName: 'mod', modVal: true });
    const entity2 = new BemEntityName({ block: 'block', modName: 'mod', modVal: 'key' });

    t.true(entity2.belongsTo(entity1));
    t.false(entity1.belongsTo(entity2));
});

test('should resolve belonging between boolean and key-value mod of element', t => {
    const entity1 = new BemEntityName({ block: 'block', elem: 'e', modName: 'mod', modVal: true });
    const entity2 = new BemEntityName({ block: 'block', elem: 'e', modName: 'mod', modVal: 'key' });

    t.true(entity2.belongsTo(entity1));
    t.false(entity1.belongsTo(entity2));
});

