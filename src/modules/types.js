export function typeOf(value) {
    const regex = /^\[object (?<type>\S+)\]$/;

    const valueAsText = Object.prototype.toString.call(value);
    const matches = valueAsText.match(regex);

    return matches.groups.type;
}

export function isJsonObject(value) {
    return typeOf(value) === 'Object';
}

export function isRegularExpression(value) {
    return typeOf(value) === 'RegExp';
}

export function isDate(value) {
    return typeOf(value) === 'Date';
}

export function isUndefined(value) {
    return typeOf(value) === 'Undefined';
}

export function isNull(value) {
    return typeOf(value) === 'Null';
}

export function notExists(value) {
    return isNull(value) || isUndefined(value);
}

export function exists(value) {
    return !notExists(value);
}

export function isObject(value) {
    return typeof value === 'object';
}

export function isString(value) {
    return typeof value === 'string';
}

export function isNumber(value) {
    return typeof value === 'number';
}

export function isBoolean(value) {
    return typeof value === 'boolean';
}
