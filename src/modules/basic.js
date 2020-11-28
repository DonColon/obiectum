import { isJsonObject, isString } from './types';

export function getProperty(value, path) {
    if (!isJsonObject(value) || !isString(path)) {
        return null;
    }

    if (!path) {
        return null;
    }

    const fragments = path.split('/');
    const valueKeys = fragments.filter((fragment) => fragment !== '');

    return valueKeys.reduce((previous, current) => previous && previous[current], value);
}

export function keys(value, sorted = false) {
    if (!isJsonObject(value)) {
        return [];
    }

    const valueKeys = Object.keys(value);

    if (sorted) {
        valueKeys.sort();
    }

    return valueKeys;
}

export function values(value) {
    const data = [];

    for (const key of keys(value)) {
        data.push(value[key]);
    }

    return data;
}

export function has(value, key) {
    if (!isString(key)) {
        return false;
    }

    if (!key) {
        return false;
    }

    const valueKeys = keys(value);
    return valueKeys.includes(key);
}

export function size(value) {
    return keys(value).length;
}
