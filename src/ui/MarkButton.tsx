import { useSlate } from "slate-react"

import Button from "../uikit/component/Button"
import { isMarkActive, toggleMark } from "../shared/utils"

import type { MarkType } from "../modules/slate/custom-types"

type MarkButtonProps = { format: MarkType; icon: string }

const MarkButton = ({ format, icon }: MarkButtonProps) => {
  const editor = useSlate()
  const isDisabled = format !== "code" && isMarkActive(editor, "code")

  return (
    <Button
      isActive={isMarkActive(editor, format) && !isDisabled}
      isDisabled={!!isDisabled}
      onMouseDown={(e) => {
        e.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <span>{icon}</span>
    </Button>
  )
}

export default MarkButton
