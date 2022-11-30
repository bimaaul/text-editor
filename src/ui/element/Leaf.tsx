import type { RenderLeafProps } from "slate-react"

const LeafElement = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.code) {
    return (
      <code
        style={{
          backgroundColor: "rgba(9, 30, 66, 0.08)",
          padding: "2px 4px",
          borderRadius: "3px",
          fontSize: "0.875em",
        }}
        {...attributes}
      >
        {children}
      </code>
    )
  }

  return (
    <span
      style={{
        fontWeight: leaf.bold ? "bold" : "normal",
        fontStyle: leaf.italic ? "italic" : "normal",
        textDecoration: leaf.underline ? "underline" : "none",
      }}
      {...attributes}
    >
      {children}
    </span>
  )
}

export { LeafElement }
