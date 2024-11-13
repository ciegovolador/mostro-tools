import { test, expect } from 'bun:test';
import { client, core } from './mostro.ts';

test('Say hello from mostro client', () => {
  const testValue = 'Mostro';
  const result = client.hello(testValue);
  const expected = `Hello Mostro! I am a cli :)`;

  expect(result).toEqual(expected);
});

test('Say hello from mostro core', () => {
  const testValue = 'Mostro';
  const result = core.hello(testValue);
  const expected = `Hello Mostro! I am the core :)`;

  expect(result).toEqual(expected);
});
