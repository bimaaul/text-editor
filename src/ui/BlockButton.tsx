import { useSlate } from "slate-react"

import Button from "../uikit/component/Button"
import { getBlockType, isBlockActive, toggleBlock } from "../shared/utils"

import type { ElementType } from "../modules/slate/custom-types"

type BlockButtonProps = { format: ElementType; icon: string }

const BlockButton = ({ format, icon }: BlockButtonProps) => {
  const editor = useSlate()

  return (
    <Button
      isActive={isBlockActive(editor, format, getBlockType(format))}
      onMouseDown={(e) => {
        e.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <span>{icon}</span>
    </Button>
  )
}

export default BlockButton
