import test from 'ava';
import BemEntityName from '..';

test('should stringify block entity name', t => {
    const entityName = new BemEntityName({ block: 'block' });

    t.is(entityName.toString(), 'block');
});

test('should stringify elem entity name', t => {
    const entityName = new BemEntityName({ block: 'block', elem: 'elem' });

    t.is(entityName.toString(), 'block__elem');
});

test('should stringify block’s simple modifier entity name', t => {
    const entityName = new BemEntityName({ block: 'block', mod: { name: 'mod', val: true } });

    t.is(entityName.toString(), 'block_mod');
});

test('should stringify block’s modifier entity name', t => {
    const entityName = new BemEntityName({ block: 'block', mod: { name: 'mod', val: 'val' } });

    t.is(entityName.toString(), 'block_mod_val');
});

test('should stringify element’s simple modifier entity name', t => {
    const entityName = new BemEntityName({ block: 'block', elem: 'elem', mod: { name: 'mod', val: true } });

    t.is(entityName.toString(), 'block__elem_mod');
});

test('should stringify element’s modifier entity name', t => {
    const entityName = new BemEntityName({ block: 'block', elem: 'elem', mod: { name: 'mod', val: 'val' } });

    t.is(entityName.toString(), 'block__elem_mod_val');
});
