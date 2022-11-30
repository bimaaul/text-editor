const isClient = typeof window !== "undefined"

const localStorageWorker = {
  isLocalStorageExist:
    isClient && typeof localStorage !== "undefined" && localStorage !== null,
  set(key: string, item: string) {
    if (this.isLocalStorageExist) {
      localStorage.setItem(key, item)
    }
  },
  get(key: string) {
    if (this.isLocalStorageExist) {
      const item = localStorage.getItem(key)
      return item
    } else {
      return null
    }
  },
  remove(key: string) {
    if (this.isLocalStorageExist) {
      localStorage.removeItem(key)
    }
  },
  clear() {
    if (this.isLocalStorageExist) {
      localStorage.clear()
    }
  },
}

export { localStorageWorker }
