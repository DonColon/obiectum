import { isJsonObject } from './types';

export default function merge(target = {}, ...sources) {
    if (!isJsonObject(target)) {
        return target;
    }

    const object = target;

    for (const source of sources) {
        if (isJsonObject(source)) {
            for (const key of Object.keys(source)) {
                if (isJsonObject(source[key])) {
                    object[key] = merge(target[key], source[key]);
                } else {
                    object[key] = source[key];
                }
            }
        }
    }

    return object;
}
