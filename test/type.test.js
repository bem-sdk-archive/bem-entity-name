import test from 'ava';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

test.beforeEach(t => {
    t.context.spy = sinon.spy();
    t.context.BemEntity = proxyquire('../index', {
        'bem-naming': {
            typeOf: t.context.spy
        }
    });
});


test('should use `naming.typeOf()` for block', t => {
    const BemEntity = t.context.BemEntity;
    const spy = t.context.spy;
    const entity = new BemEntity({ block: 'block' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;

    t.truthy(spy.calledWith({ block: 'block' }));
});

test('should use `naming.typeOf()` for elem', t => {
    const BemEntity = t.context.BemEntity;
    const spy = t.context.spy;
    const entity = new BemEntity({ block: 'block', elem: 'elem' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;

    t.truthy(spy.calledWith({ block: 'block', elem: 'elem' }));
});

test('should use `naming.typeOf()` for block modifier', t => {
    const BemEntity = t.context.BemEntity;
    const spy = t.context.spy;
    const entity = new BemEntity({ block: 'block', modName: 'mod', modVal: 'val' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;

    t.truthy(spy.calledWith({ block: 'block', modName: 'mod', modVal: 'val' }));
});

test('should use naming.typeOf() for element modifier', t => {
    const BemEntity = t.context.BemEntity;
    const spy = t.context.spy;
    const entity = new BemEntity({ block: 'block', elem: 'elem', modName: 'mod', modVal: 'val' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;

    t.truthy(spy.calledWith({ block: 'block', elem: 'elem', modName: 'mod', modVal: 'val' }));
});

test('should cache type value', t => {
    const stub = sinon.stub();
    const BemEntity = proxyquire('../index', {
        'bem-naming': {
            typeOf: stub
        }
    });

    stub.returns('type');
    const entity = new BemEntity({ block: 'block' });

    /*eslint no-unused-expressions: "off"*/
    entity.type;
    entity.type;
    entity.type;

    t.is(stub.callCount, 1);
});
