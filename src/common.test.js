'use strict';
const common = require('./common');

describe('generateAthenaKey', () => {
  test('generates correctly formatted Athena key', () => {
    let timestamp = new Date(2020, 2);
    timestamp.setUTCDate(29);

    expect(common.generateAthenaKey(
      {
        'year': '2017',
        'month': '0',
        'day': '31'
      },
      'key',
      timestamp,
      'id'
    )).toBe('keyyear=2020/month=2/day=29/id.json.gz');
  });

  test('updates timestamp', () => {
    let timestamp = new Date(2020, 2);
    timestamp.setUTCDate(29);
    let data = {
      'year': '2017',
      'month': '0',
      'day': '31'
    };

    common.generateAthenaKey(
      data,
      'key',
      timestamp,
      'id'
    );

    expect(data.year).toBe(2020);
    expect(data.month).toBe(2);
    expect(data.day).toBe(29);
    expect(data.iso_timestamp).toBe('2020-02-29T16:00:00.000Z');
  });
});