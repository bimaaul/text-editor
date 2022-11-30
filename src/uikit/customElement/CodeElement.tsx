import type { ElementWithStyle } from "../../modules/slate/custom-types"

const CodeElement = ({ children, attributes, style }: ElementWithStyle) => {
  return (
    <pre style={style} {...attributes}>
      <code>{children}</code>
    </pre>
  )
}

export { CodeElement }
