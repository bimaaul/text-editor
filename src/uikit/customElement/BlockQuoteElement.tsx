import type { ElementWithStyle } from "../../modules/slate/custom-types"

const BlockQuoteElement = ({
  children,
  attributes,
  style,
}: ElementWithStyle) => {
  return (
    <blockquote
      style={style}
      className="px-4 my-4 bg-black border-l-4 border-yellow"
      {...attributes}
    >
      {children}
    </blockquote>
  )
}

export { BlockQuoteElement }
