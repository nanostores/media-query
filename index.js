import { atom, onMount } from 'nanostores'

export function fromMediaQuery(query, trueValue = true, falseValue = false) {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return atom(falseValue)
  }

  let media = window.matchMedia(query)
  let getValue = () => media.matches ? trueValue : falseValue
  let store = atom(getValue())

  function listen() {
    store.set(getValue())
  }
  onMount(store, () => {
    media.addEventListener('change', listen)
    return () => {
      media.removeEventListener('change', listen)
    }
  })

  return store
}
