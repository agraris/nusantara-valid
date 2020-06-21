/*
 * NIP_REGEX
 *
 * NIP_REGEX[0] = NIP
 * NIP_REGEX[1] = Birthday
 * NIP_REGEX[2] = Recruiting Years and Month
 * NIP_REGEX[3] = Gender (1 for man, 2 for woman)
 * NIP_REGEX[4] = Index
*/
export const NIP_REGEX = /^([0-9]{8})([0-9]{6})([1,2]{1})([0-9]{3})$/

export const NIP_LENGTH = 18