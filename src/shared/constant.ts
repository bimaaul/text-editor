const localStorageKeys = {
  content: "content",
}

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  "shift+enter": "softbreak",
} as const

const LIST_TYPES = ["bulleted-list", "numbered-list"]
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"]

export { localStorageKeys, HOTKEYS, LIST_TYPES, TEXT_ALIGN_TYPES }
