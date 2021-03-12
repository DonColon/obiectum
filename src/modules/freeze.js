import { isJsonObject } from './types';

export default function freeze(value) {
    if (!isJsonObject(value) || Object.isFrozen(value)) {
        return value;
    }

    const target = value;

    for (const key of Object.keys(value)) {
        target[key] = freeze(value[key]);
    }

    return Object.freeze(target);
}
