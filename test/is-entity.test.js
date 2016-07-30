import test from 'ava';

import BemEntity from '../index';

test('should check valid entities', t => {
    const entity = new BemEntity({ block: 'block' });

    t.true(BemEntity.isBemEntity(entity));
});

test('should not pass invalid blocks', t => {
    t.falsy(BemEntity.isBemEntity(new Array()));
});

