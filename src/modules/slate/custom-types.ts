import { HOTKEYS } from "../../shared/constant"

import type { CSSProperties } from "react"
import type { BaseEditor } from "slate"
import type { ReactEditor, RenderElementProps } from "slate-react"

export type ElementWithStyle = RenderElementProps & {
  style: CSSProperties
}
export type Keys = keyof typeof HOTKEYS
export type MarkType = typeof HOTKEYS[Keys]

export type CustomEditor = BaseEditor & ReactEditor

export type BaseElement = {
  children: Array<CustomText>
  align?: CanvasTextAlign
}
export type ParagraphElement = BaseElement & {
  type: "paragraph"
}
export type BlockQuoteElement = BaseElement & {
  type: "block-quote"
}
export type BulletedListElement = BaseElement & {
  type: "bulleted-list"
}
export type NumberedListElement = BaseElement & {
  type: "numbered-list"
}
export type ListItemElement = BaseElement & {
  type: "list-item"
}
export type HeadingElement = BaseElement & {
  type: "heading-1" | "heading-2" | "heading-3"
}
export type CodeElement = BaseElement & {
  type: "code"
}
export type AlignElement = BaseElement & {
  type: "left" | "center" | "right" | "justify"
}

export type CustomElement =
  | ParagraphElement
  | HeadingElement
  | CodeElement
  | BlockQuoteElement
  | BulletedListElement
  | NumberedListElement
  | ListItemElement
  | AlignElement
export type ElementType = CustomElement["type"]
export type ElementKey = Exclude<keyof CustomElement, "children">

export type FormattedText = {
  text: string
  bold?: boolean
  italic?: boolean
  code?: boolean
  underline?: boolean
}
export type CustomText = FormattedText

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
  }
}
