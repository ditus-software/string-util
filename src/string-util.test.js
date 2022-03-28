//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import StringUtil from './string-util';

describe('StringUtil', () => {
  describe('splitCamelCase', () => {
    it('returns null if the value is undefined.', () => {
      expect(StringUtil.splitCamelCase(undefined)).toBeNull();
    });

    it('returns null if the value is null.', () => {
      expect(StringUtil.splitCamelCase(null)).toBeNull();
    });

    it('returns null if the value is an empty string.', () => {
      expect(StringUtil.splitCamelCase('')).toBeNull();
    });

    it('returns null if the value is whitespace.', () => {
      expect(StringUtil.splitCamelCase('   ')).toBeNull();
    });

    it('returns an array containing the word specified in the value if the value contains only one word.', () => {
      expect(StringUtil.splitCamelCase('hello')).toEqual(['hello']);
    });

    it('returns an array containing two words if the value contains two words in pascal case.', () => {
      expect(StringUtil.splitCamelCase('HelloThere')).toEqual(['Hello', 'There']);
    });

    it('returns an array containing two words if the value contains two words in camel case.', () => {
      expect(StringUtil.splitCamelCase('helloThere')).toEqual(['hello', 'There']);
    });

    it('returns an array containing three words if the value contains three words in camel case.', () => {
      expect(StringUtil.splitCamelCase('helloThereWorld')).toEqual(['hello', 'There', 'World']);
    });
  });
});
