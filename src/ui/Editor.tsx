import { Element, LeafElement } from "./element"
import { Editable, Slate } from "slate-react"
import { KeyboardEvent, useCallback } from "react"
import isHotkey from "is-hotkey"

import Toolbar from "../uikit/component/Toolbar"
import MarkButton from "./MarkButton"
import BlockButton from "./BlockButton"
import { isMarkActive, toggleMark } from "../shared/utils"
import { HOTKEYS } from "../shared/constant"

import type { Descendant } from "slate"
import type { RenderElementProps, RenderLeafProps } from "slate-react"
import type { CustomEditor } from "../modules/slate/custom-types"

type EditorProps = {
  editor: CustomEditor
  value: Array<Descendant>
  onChange?: (value: Array<Descendant>) => void
}

const Editor = ({ editor, value, onChange }: EditorProps) => {
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  )

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <LeafElement {...props} />,
    []
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      for (const hotkey in HOTKEYS) {
        if (isHotkey(hotkey, e)) {
          e.preventDefault()
          const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS]
          if (mark !== "code" && isMarkActive(editor, "code")) return

          toggleMark(editor, mark)
        }
      }
    },
    [editor]
  )

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Toolbar>
        <div>
          <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <MarkButton format="underline" icon="format_underlined" />
          <MarkButton format="code" icon="code" />
        </div>
        <div>
          <BlockButton format="heading-1" icon="looks_one" />
          <BlockButton format="heading-2" icon="looks_two" />
          <BlockButton format="heading-3" icon="looks_3" />
          <BlockButton format="block-quote" icon="format_quote" />
          <BlockButton format="numbered-list" icon="format_list_numbered" />
          <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        </div>
        <div>
          <BlockButton format="left" icon="format_align_left" />
          <BlockButton format="center" icon="format_align_center" />
          <BlockButton format="right" icon="format_align_right" />
          <BlockButton format="justify" icon="format_align_justify" />
        </div>
      </Toolbar>
      <Editable
        style={{
          padding: "16px 12px",
          borderTop: "1.5px solid #E5E7EB",
        }}
        placeholder="Start editing with your text editor"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={handleKeyDown}
      />
    </Slate>
  )
}

export default Editor
