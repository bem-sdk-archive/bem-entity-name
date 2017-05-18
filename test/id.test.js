import test from 'ava';

import BemEntityName from '..';

test('should build equal id for equal blocks', t => {
    const entityName1 = new BemEntityName({ block: 'block' });
    const entityName2 = new BemEntityName({ block: 'block' });

    t.is(entityName1.id, entityName2.id);
});

test('should build not equal id for not equal blocks', t => {
    const entityName1 = new BemEntityName({ block: 'block1' });
    const entityName2 = new BemEntityName({ block: 'block2' });

    t.not(entityName1.id, entityName2.id);
});

test('should cache id for repeating calls', t => {
    const entityName1 = new BemEntityName({ block: 'block1' });
    const id = entityName1.id;

    entityName1._data = {};
    t.is(id, entityName1.id);
});
