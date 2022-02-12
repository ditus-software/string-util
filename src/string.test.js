//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import './string';

describe('String', () => {
  describe('equals', () => {
    it('returns true when both the first and second strings are null.', () => {
      expect(String.equals(null, null, false)).toBeTruthy();
      expect(String.equals(null, null, true)).toBeTruthy();
    });

    it('returns false when the first string is null and second strings is non-null.', () => {
      expect(String.equals(null, 'a', false)).toBeFalsy();
      expect(String.equals(null, 'a', true)).toBeFalsy();
    });

    it('returns false when the first string is non-null and second strings is null.', () => {
      expect(String.equals('a', null, false)).toBeFalsy();
      expect(String.equals('a', null, true)).toBeFalsy();
    });

    it('returns false when the first string does not match the second string, regardless of case.', () => {
      expect(String.equals('a', 'b', false)).toBeFalsy();
      expect(String.equals('a', 'b', true)).toBeFalsy();
    });

    it('returns false when the first string matches the second string, but differs in case.', () => {
      expect(String.equals('A', 'a', false)).toBeFalsy();
    });

    it('returns true when the first string matches the second string, but does not differ in case.', () => {
      expect(String.equals('A', 'A', false)).toBeTruthy();
    });

    it('returns true when the first string matches the second string, but differ in case, and case is ignored.', () => {
      expect(String.equals('A', 'a', true)).toBeTruthy();
    });
  });

  describe('isNullOrWhiteSpace', () => {
    it('returns true when the value is null.', () => {
      expect(String.isNullOrWhiteSpace(null)).toBeTruthy();
    });

    it('returns true when the value is undefined.', () => {
      expect(String.isNullOrWhiteSpace(undefined)).toBeTruthy();
    });

    it('returns true when the value is white space.', () => {
      expect(String.isNullOrWhiteSpace('    ')).toBeTruthy();
    });

    it('returns false when the value is anything else.', () => {
      expect(String.isNullOrWhiteSpace(' the dog ')).toBeFalsy();
    });
  });

  describe('isNull', () => {
    it('returns true when the value is null.', () => {
      expect(String.isNull(null)).toBeTruthy();
    });

    it('returns true when the value is undefined.', () => {
      expect(String.isNull(undefined)).toBeTruthy();
    });

    it('returns true when the value is an empty string.', () => {
      expect(String.isNull('')).toBeTruthy();
    });

    it('returns false when the value is white space.', () => {
      expect(String.isNull('    ')).toBeFalsy();
    });

    it('returns false when the value is anything else.', () => {
      expect(String.isNull('the dog')).toBeFalsy();
    });
  });
});
