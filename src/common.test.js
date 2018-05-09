'use strict';
const common = require('./common');

describe('getProcessPromises', () => {
  test('given [] returns []', () => {
    expect(common.getProcessPromises([])).toEqual([]);
  })
})