import { foo, wait } from '../src/index.ts'
import { test, expect } from 'bun:test'


  test('foo should be bar', () => {
    expect(foo).toBe('bar')
  })

  test('wait 100ms', async () => {
    const flag = await wait(100)
    expect(flag).toBe(true)
  })
