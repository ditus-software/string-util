//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//

/**
 * Determines whether the specified strings are equal.
 *
 * @param {string} valueA The first string.
 * @param {string} valueB The second string.
 * @param {boolean} ignoreCase true to ignore case during the comparison; otherwise, false.
 * @returns {boolean} true if both parameters are equal; otherwise, false.
 */
String.equals = (valueA, valueB, ignoreCase) => {
  if (valueA === null && valueB === null) {
    return true;
  }

  if (valueA === null && valueB !== null) {
    return false;
  }

  if (valueA !== null && valueB === null) {
    return false;
  }

  if (ignoreCase) {
    return valueA.toUpperCase() === valueB.toUpperCase();
  }

  return valueA === valueB;
};

/**
 * Indicates whether a specified string is null, empty, or consists only of
 * white-space characters.
 *
 * @param {string} value The string to test.
 * @returns {boolean} true if the value is null or empty or consists exclusively
 * of white-space characters; otherwise, false.
 */
// Other types of variables can be passed to this method. Other types will not
// necessarily have a "match" method.
String.isNullOrWhiteSpace = (value) => value === null || value === undefined || (value.match && value.match(/^\s*$/) !== null);

/**
 * Indicates whether a specified string is null or empty. White-space characters
 * are permitted.
 *
 * @param {string} value The string to test.
 * @returns {boolean} true if the value is null or empty; otherwise, false.
 */
String.isNull = (value) => value === null || value === undefined || value.length === 0;
