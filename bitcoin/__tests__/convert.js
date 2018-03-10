'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
  //convert(2, 'BTC', 'BTC');
  expect(convert(2, 'BTC', 'BTC')).toBe(2);
});

test('should return a Number', () => {
  //convert(2, 'BTC', 'BTC', 'Number');
  expect(convert(2, 'BTC', 'BTC')).toBe(2);
});

test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
  expect(convert(2, 'BTC', 'BTC', 'Big')).toEqual(new Big(2));
});

test('should return a String', () => {
  //convert(2100, 'mBTC', 'BTC', 'String');
  expect(convert(2, 'BTC', 'BTC', 'String')).toBe('2');
});

test('should convert an integer', () => {
  //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
  expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toBe(1234567.89012345);
});

test('should convert a number', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toBe(123456789012345);
});

test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
  expect(convert('2', 'BTC', 'BTC', 'Number')).toBe(2);
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).toBe(2);
});

test('should convert a NaN to a Number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
  expect(convert(NaN, 'BTC', 'BTC', 'Number')).toBe(NaN);
  expect(convert(NaN, 'BTC', 'mBTC', 'Number')).toBe(NaN);
  expect(convert(NaN, 'BTC', 'BTC')).toBe(NaN);
});


test('should convert a NaN to a String', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
  expect(convert(NaN, 'BTC', 'BTC', 'String')).toBe('NaN');
  expect(convert(NaN, 'BTC', 'mBTC', 'String')).toBe('NaN');
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
  expect(() => { convert(NaN, 'BTC', 'BTC', 'Big') }).toThrowError('NaN');
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toBe(0.000000046);
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBe(4.6);
});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
  expect(() => { convert(new Big(2), 'x', 'BTC', 'Number') }).toThrow(/is not a bitcoin unit/);
  expect(() => { convert(new Big(2), 'BTC', 'x', 'Number') }).toThrow(/is not a bitcoin unit/);
  expect(() => { convert(NaN, 'x', 'BTC', 'Number') }).toThrow(/is not a bitcoin unit/);
  expect(() => { convert(NaN, 'BTC', 'x', 'Number') }).toThrow(/is not a bitcoin unit/);
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
  expect(() => { convert(2, 'BTC', 'mBTC', 'x') }).toThrow(/is not a valid representation/);
  expect(() => { convert(NaN, 'BTC', 'mBTC', 'x') }).toThrow(/is not a valid representation/);
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'btest');
  expect(convert(4.6, 'Satoshi', 'sat')).toBe(4.6);
  expect(() => { convert(4.6, 'μBTC', 'btest') }).toThrow(/is not a bitcoin unit/);

});

test('should add a unit', () => {
  convert.addUnit('vidu', 0.060496);
  const units = convert.units();
  expect(units[units.length - 1]).toBe('vidu');
});

test('should throw when unit has already a factor', () => {
  expect(() => { convert.addUnit('BTC', 0.100717) }).toThrow(/already exists with a different conversion factor/);
});

test('should remove a unit', () => {
  convert.removeUnit('vidu');
  const units = convert.units();
  expect(units[units.length - 1]).toBe('sat');
});

test('should throw when a predefined unit is removed', () => {
  expect(() => { convert.removeUnit('BTC') }).toThrow(/is predefined and cannot be removed/)
});