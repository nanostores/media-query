import { equal } from 'node:assert/strict'
import { test } from 'node:test'

import { fromMediaQuery } from './index.js'

test('exists', () => {
  equal(typeof fromMediaQuery, 'function')
  let store = fromMediaQuery()
  equal(typeof store, 'object')
})
