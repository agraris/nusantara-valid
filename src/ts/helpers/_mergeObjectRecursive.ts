/**
 * Recursively merge properties of two objects.
 *
 * @param {any} target Object target.
 * @param {any} source Object source.
 * @return {any} Merged object.
**/
export function MergeRecursive(target: any, source: any): any {
    const isObject = (obj: any) => !!obj && obj.constructor === Object

    if (!isObject(target) || !isObject(source)) return source;

    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
        } else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = MergeRecursive(Object.assign({}, targetValue), sourceValue);
        } else {
            target[key] = sourceValue;
        }
    });

    return target;
}