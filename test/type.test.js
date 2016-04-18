import test from 'ava';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

test.beforeEach('setup', t => {
    t.context.stub = sinon.stub().returns('type');
    t.context.BemEntity = proxyquire('../index', {
        'bem-naming': {
            typeOf: t.context.stub
        }
    });
});


test('should use `naming.typeOf()` for block', t => {
    const entity = new t.context.BemEntity({ block: 'block' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;

    t.ok(t.context.stub.calledWith({ block: 'block' }));
});

test('should use `naming.typeOf()` for elem', t => {
    const entity = new t.context.BemEntity({ block: 'block', elem: 'elem' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;

    t.ok(t.context.stub.calledWith({ block: 'block', elem: 'elem' }));
});

test('should use `naming.typeOf()` for block modifier', t => {
    const entity = new t.context.BemEntity({ block: 'block', modName: 'mod', modVal: 'val' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;

    t.ok(t.context.stub.calledWith({ block: 'block', modName: 'mod', modVal: 'val' }));
});

test('should use naming.typeOf() for element modifier', t => {
    const entity = new t.context.BemEntity({ block: 'block', elem: 'elem', modName: 'mod', modVal: 'val' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;

    t.ok(t.context.stub.calledWith({ block: 'block', elem: 'elem', modName: 'mod', modVal: 'val' }));
});

test('should cache type value', t => {
    const entity = new t.context.BemEntity({ block: 'block' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;
    entity.type;

    t.is(t.context.stub.callCount, 1);
});