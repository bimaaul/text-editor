import type { ElementWithStyle } from "../../modules/slate/custom-types"

const DefaultElement = ({ children, attributes, style }: ElementWithStyle) => {
  return (
    <p style={style} {...attributes}>
      {children}
    </p>
  )
}

export { DefaultElement }
