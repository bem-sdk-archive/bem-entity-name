module.exports = function(obj) {
    if (typeof obj === 'string') {
        obj = { block: obj };
    }

    const data = { block: obj.block };
    const mod = obj.mod;

    obj.elem && (data.elem = obj.elem);

    if (mod || obj.modName) {
        const isString = typeof mod === 'string';
        const modName = (isString ? mod : mod && mod.name) || obj.modName;
        const modObj = !isString && mod || obj;
        const hasModVal = modObj.hasOwnProperty('val') || obj.hasOwnProperty('modVal');

        data.mod = {
            name: modName,
            val: hasModVal ? modObj.val || obj.modVal : true
        };
    }

    return data;
};
