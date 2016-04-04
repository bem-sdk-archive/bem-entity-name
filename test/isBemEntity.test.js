import test from 'ava';

import BemEntity from '../index';

test('should check valid blocks', t => {
    const entity1 = new BemEntity({ block: 'block' });
    const entity2 = new BemEntity({ block: 'block', elem: 'el' });
    const entity3 = new BemEntity({ block: 'block', mod: 'mod' });

    t.true(BemEntity.isBemEntity(entity1));
    t.true(BemEntity.isBemEntity(entity2));
    t.true(BemEntity.isBemEntity(entity3));
});

test('should not pass invalid blocks', t => {
    t.false(BemEntity.isBemEntity(new Array()));
});

