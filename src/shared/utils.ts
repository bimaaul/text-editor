import { Editor, Element, Transforms } from "slate"

import type {
  ElementType,
  CustomEditor as CustomEditorType,
  ElementKey,
  MarkType,
  CustomElement,
} from "../modules/slate/custom-types"
import { LIST_TYPES, TEXT_ALIGN_TYPES } from "./constant"

const getBlockType = (format: string) => {
  if (TEXT_ALIGN_TYPES.indexOf(format) > -1) return "align"

  return "type"
}

const isMarkActive = (editor: CustomEditorType, format: MarkType) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const isCodeActive = (editor: CustomEditorType) => {
  const marks = Editor.marks(editor)
  return marks && marks["code"]
}
const toggleMark = (editor: CustomEditorType, format: MarkType) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (
  editor: CustomEditorType,
  format: string,
  key: ElementKey = "type"
) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => Element.isElement(n) && n[key] === format,
    })
  )

  return !!match
}

const toggleBlock = (editor: CustomEditorType, format: ElementType) => {
  const blockType = getBlockType(format)
  const isActive = isBlockActive(editor, format, blockType)

  const isList = LIST_TYPES.includes(format)
  const isAlign = blockType === "align"

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      Element.isElement(n) && LIST_TYPES.includes(n.type) && !isAlign,
    split: true,
  })

  let newProperties: Partial<CustomElement>
  if (isAlign) {
    newProperties = {
      align: isActive ? undefined : (format as CanvasTextAlign),
    }
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    }
  }

  Transforms.setNodes(editor, newProperties)
  if (!isActive && isList) {
    const block: any = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export {
  toggleMark,
  toggleBlock,
  isMarkActive,
  isBlockActive,
  isCodeActive,
  getBlockType,
}
