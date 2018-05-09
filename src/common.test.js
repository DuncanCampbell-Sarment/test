'use strict';
const common = require('./common');

describe('generateAthenaKey', () => {
  test('generates correctly formatted Athena key', () => {
    expect(common.generateAthenaKey(
      {
        'year': '2017',
        'month': '0',
        'day': '31'
      },
      'key',
      new Date(2020, 1, 29),
      'id'
    )).toBe('keyyear=2020/month=2/day=28/id.json.gz');
  });

  test('updates timestamp', () => {
    let timestamp = {
      'year': '2017',
      'month': '0',
      'day': '31'
    };

    common.generateAthenaKey(
      timestamp,
      'key',
      new Date(2020, 1, 29),
      'id'
    );
    
    expect(timestamp.year).toBe(2020);
    expect(timestamp.month).toBe(2);
    expect(timestamp.day).toBe(28);
    expect(timestamp.iso_timestamp).toBe('2020-02-28T16:00:00.000Z');
  });
});