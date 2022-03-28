//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//

import './string';

/**
 * Contains static methods for working with strings.
 */
export default class StringUtil {
  /**
   * Splits words that are in camel case into an array.
   *
   * @param {string} value The word to split (i.e. testThisOut).
   * @returns {Array} An array containing the words.
   */
  static splitCamelCase(value) {
    if (!String.isNullOrWhiteSpace(value)) {
      return value.split(/(?<=[a-z])(?=[A-Z])/);
    }

    return null;
  }
}
