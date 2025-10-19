import { atom, onMount } from 'nanostores'

export function fromMediaQuery(query, trueValue = true, falseValue = false) {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return atom(false)
  }

  let media = window.matchMedia(query)
  let store = atom(media.matches ? trueValue : falseValue)

  function listen() {
    store.set(media.matches ? trueValue : falseValue)
  }
  onMount(store, () => {
    media.addEventListener('change', listen)
    return () => {
      media.removeEventListener('change', listen)
    }
  })

  return store
}
