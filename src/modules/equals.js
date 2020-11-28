export default function equals(value, other) {
    if (value === other) {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }

    if (other === undefined || other === null) {
        return false;
    }

    if (typeof value !== 'object' && typeof other !== 'object') {
        return value === other;
    }

    const valueKeys = Object.keys(value);
    const otherKeys = Object.keys(other);

    if (valueKeys.length !== otherKeys.length) {
        return false;
    }

    return valueKeys.every((key) => equals(value[key], other[key]));
}
