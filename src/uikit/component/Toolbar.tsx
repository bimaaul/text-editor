import type { PropsWithChildren } from "react"

const Toolbar = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-wrap divide-x [&>div]:px-2 [&>div>*]:mx-1 my-2">
      {children}
    </div>
  )
}

export default Toolbar
