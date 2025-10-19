interface Listener {
  (event: MediaQueryListEvent): void
}
type Listeners = Set<Listener>

let mediaListeners: Record<string, Listeners> = {}
let mediaMatches: Record<string, boolean> = {}

function matchMedia(query: string): MediaQueryList {
  mediaMatches[query] = false
  mediaListeners[query] = new Set<Listener>()
  return {
    // @ts-expect-error
    addEventListener(type: string, listener: Listener): void {
      if (type !== 'change') {
        throw new TypeError('Only change event is supported')
      }
      mediaListeners[query].add(listener)
    },
    get matches() {
      return mediaMatches[query]
    },
    // @ts-expect-error
    removeEventListener(type: string, listener: Listener): void {
      if (type !== 'change') {
        throw new TypeError('Only change event is supported')
      }
      mediaListeners[query].delete(listener)
    }
  }
}

// @ts-expect-error
globalThis.window = {
  matchMedia
}

export function changeMedia(query: string, matches: boolean): void {
  mediaMatches[query] = matches
  mediaListeners[query].forEach(listener => {
    listener({ matches } as MediaQueryListEvent)
  })
}
