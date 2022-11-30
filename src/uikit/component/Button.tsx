import type { PropsWithChildren } from "react"

type ButtonProps = {
  isActive: boolean
  isDisabled?: boolean
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  isActive,
  onMouseDown,
  isDisabled,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const activeStyle = isActive
    ? "text-active bg-activeBg"
    : "text-[rgba(0,0,0,.7)] bg-white"
  const disableStyle = isDisabled
    ? "cursor-not-allowed text-disabled"
    : "cursor-pointer"

  return (
    <button
      disabled={isDisabled}
      className={`font-material-icon px-0.5 ${activeStyle} ${disableStyle}`}
      onMouseDown={onMouseDown}
    >
      {children}
    </button>
  )
}

export default Button
