import type { ReadableAtom } from 'nanostores'

/**
 * Create smart store, which will show the state of some media query.
 *
 * ```js
 * import { fromMediaQuery } from '@nanostores/media-query'
 *
 * const $isMobile = fromMediaQuery('(max-width: 600px)')
 * ```
 *
 * @param query Media query.
 * @param trueValue Store’s value when media query matches.
 * @param falseValue Store’s value when media query doesn’t matches.
 */
export function fromMediaQuery<const TrueValue, const FalseValue>(
  query: string,
  trueValue: TrueValue,
  falseValue: FalseValue
): ReadableAtom<FalseValue | TrueValue>
export function fromMediaQuery(query: string): ReadableAtom<boolean>
