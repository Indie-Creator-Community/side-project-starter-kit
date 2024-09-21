/**
 * isNullOrUndefined.
 *
 * - validate if an element is null or undefined.
 *
 * @function
 * @param {any} value - Element to validate.
 * @returns {boolean} Element is null or undefined.
 */
export const isNullOrUndefined = (value: unknown): boolean => value === undefined || value === null;
