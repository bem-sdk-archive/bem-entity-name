const EntityTypeError = require('./entity-type-error');

/**
 * @param {BEMSDK.EntityName.Options} obj — representation of entity name.
 * @returns {BEMSDK.EntityName.ModifierName}
 */
function getModName(obj) {
    const modObj = obj.mod;

    return (typeof modObj === 'string' ? modObj : modObj && modObj.name) || obj.modName;
}

/**
 * @param {BEMSDK.EntityName.Options} obj — representation of entity name.
 * @returns {BEMSDK.EntityName.Modifier}
 */
function getMod(obj) {
    const modObj = obj.mod;
    const modName = getModName(obj);
    const hasModVal = modObj && modObj.hasOwnProperty('val') || obj.hasOwnProperty('modVal');

    if (modName) {
        data.mod = {
            name: modName,
            val: hasModVal ? modObj && modObj.val || obj.modVal : true
        };
    } else if (modObj || hasModVal) {
        throw new EntityTypeError(obj, 'the field `mod.name` is undefined');
    }
}

/**
 * @param {BEMSDK.EntityName.Options} obj — representation of entity name.
 * @returns {BEMSDK.EntityName.Representation}
 */
function normalize(obj) {
    if (!obj.block) {
        throw new EntityTypeError(obj, 'the field `block` is undefined');
    }

    const data = { block: obj.block };

    obj.elem && (data.elem = obj.elem);

    const modObj = obj.mod;
    const modName = (typeof modObj === 'string' ? modObj : modObj && modObj.name) || obj.modName;
    const hasModVal = modObj && modObj.hasOwnProperty('val') || obj.hasOwnProperty('modVal');

    if (modName) {
        data.mod = {
            name: modName,
            val: hasModVal ? modObj && modObj.val || obj.modVal : true
        };
    } else if (modObj || hasModVal) {
        throw new EntityTypeError(obj, 'the field `mod.name` is undefined');
    }

    return data;
}

module.exports = normalize;
