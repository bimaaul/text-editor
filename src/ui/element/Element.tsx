import {
  BlockQuoteElement,
  HeadingElement,
  DefaultElement,
  BulletedList,
  NumberedList,
  ListItem,
} from "../../uikit/customElement"

import type { CSSProperties } from "react"
import type { RenderElementProps } from "slate-react"

const Element = (props: RenderElementProps) => {
  const style: CSSProperties = {
    textAlign: props.element.align,
  }

  switch (props.element.type) {
    case "block-quote":
      return <BlockQuoteElement style={style} {...props} />
    case "heading-1":
    case "heading-2":
    case "heading-3":
      const level = props.element.type.split("-")[1]
      return <HeadingElement level={Number(level)} style={style} {...props} />
    case "bulleted-list":
      return <BulletedList style={style} {...props} />
    case "numbered-list":
      return <NumberedList style={style} {...props} />
    case "list-item":
      return <ListItem style={style} {...props} />
    default:
      return <DefaultElement style={style} {...props} />
  }
}

export { Element }
