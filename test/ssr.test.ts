import { equal } from 'node:assert/strict'
import { test } from 'node:test'

import { fromMediaQuery } from '../index.js'

test('works outside of browser', () => {
  let store = fromMediaQuery('(max-width: 600px)')
  equal(store.get(), false)
})

test('Server returns custom false value', () => {
  let store = fromMediaQuery('(max-width: 600px)', '🍏', '🥔')
  equal(store.get(), '🥔')
})
