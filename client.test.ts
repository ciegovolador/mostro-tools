import { test, expect } from 'bun:test'
import { client } from './mostro.ts'


test('Cliet', () => {

    const testValue = 'Mostro'
    const result = client.hello(testValue)
    const expected = `Hello Mostro! I am a cli :)`

    expect(result).toEqual(expected)
  })