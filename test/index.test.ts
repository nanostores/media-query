import { deepEqual, equal } from 'node:assert/strict'
import { test } from 'node:test'

import { fromMediaQuery } from '../index.js'
import { changeMedia } from './setup.ts'

test('works with default boolean value', () => {
  let store = fromMediaQuery('(max-width: 600px)')
  equal(store.get(), false)

  let changes: boolean[] = []
  store.listen(value => {
    changes.push(value)
  })
  deepEqual(changes, [])

  changeMedia('(max-width: 600px)', true)
  deepEqual(changes, [true])
  equal(store.get(), true)
})

test('works with custom value', () => {
  let store = fromMediaQuery('(max-width: 500px)', 'yes', 'no')
  equal(store.get(), 'no')

  changeMedia('(max-width: 500px)', true)
  equal(store.get(), 'yes')
})
