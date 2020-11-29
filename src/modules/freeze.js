import { isJsonObject } from './types';

export default function freeze(value) {
    if(!isJsonObject(value) || Object.isFrozen(value)) {
        return value;
    }

    for(const key of Object.keys(value)) {
        value[key] = freeze(value[key]);
    }

    return Object.freeze(value);
}
