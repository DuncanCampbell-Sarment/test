'use strict';
const common = require('./common');

describe('dummy', () => {
  test('dummy is dumb', () => {
    const answer = common.dummy(5)

    expect(answer).toBe(42)
  });
});