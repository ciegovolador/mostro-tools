import { test, expect } from 'bun:test'
import { core } from './mostro.ts'


test('Core', () => {

    const testValue = 'Mostro'
    const result = core.hello(testValue)
    const expected = `Hello Mostro! I am the core :)`

    expect(result).toEqual(expected)
  })