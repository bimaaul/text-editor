import type {
  ElementWithStyle,
  HeadingElement as HeadingElementType,
} from "../../modules/slate/custom-types"

const HeadingElement = ({
  children,
  attributes,
  level,
  style,
}: ElementWithStyle & {
  level: number
}) => {
  if (level === 3) {
    return (
      <h3 style={style} className="text-lg" {...attributes}>
        {children}
      </h3>
    )
  }

  if (level === 2) {
    return (
      <h2 style={style} className="text-xl" {...attributes}>
        {children}
      </h2>
    )
  }
  return (
    <h1 style={style} className="text-2xl" {...attributes}>
      {children}
    </h1>
  )
}

export { HeadingElement }
