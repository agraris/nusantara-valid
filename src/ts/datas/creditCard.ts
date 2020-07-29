/**
 * Nusantara Valid: creditCard.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/

/**
 * CC_LENGTH
 *
 * Total length of Credit Card number without any special characters
**/
export const CC_LENGTH = 16

/**
 * CC_VALID_MII
 *
 * Lists of Credit Card valid MII number
**/
export const CC_VALID_MII = [
    '4', '5',
]

/**
 * CC_SPACE_INDEXES
 *
 * Indexes of where are the space separator to be placed
 * Eg: 4000 0000 0000 0000
**/
export const CC_SPACE_INDEXES = [3, 7, 11, 11]
