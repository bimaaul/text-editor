import type { ElementWithStyle } from "../../modules/slate/custom-types"

const BulletedList = ({ children, attributes, style }: ElementWithStyle) => {
  return (
    <ul style={style} className="list-disc list-inside" {...attributes}>
      {children}
    </ul>
  )
}

const NumberedList = ({ children, attributes, style }: ElementWithStyle) => {
  return (
    <ol style={style} className="list-decimal list-inside" {...attributes}>
      {children}
    </ol>
  )
}

const ListItem = ({ children, attributes, style }: ElementWithStyle) => {
  return (
    <li style={style} className="marker:mr-0" {...attributes}>
      {children}
    </li>
  )
}

export { BulletedList, NumberedList, ListItem }
