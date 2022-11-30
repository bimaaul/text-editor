import Head from "next/head"
import dynamic from "next/dynamic"
import React, { useMemo, useState } from "react"
import { createEditor } from "slate"
import { withReact } from "slate-react"
import { withHistory } from "slate-history"

import { localStorageWorker } from "../shared/storage"
import { localStorageKeys } from "../shared/constant"
import type { Descendant } from "slate"

const Editor = dynamic(() => import("../ui/Editor"), {
  ssr: false,
})

const defaultValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "Try write something here.." }],
  },
]

export default function Home() {
  const [editor] = useState(() => withReact(withHistory(createEditor())))

  const initialValue = useMemo(() => {
    const storedContent = localStorageWorker.get(localStorageKeys.content)
    return storedContent ? JSON.parse(storedContent) : defaultValue
  }, [])

  const handleOnChange = (value: Descendant[]) => {
    const isAstChange = editor.operations.some(
      (op) => op.type !== "set_selection"
    )

    if (isAstChange) {
      const content = JSON.stringify(value)
      localStorageWorker.set(localStorageKeys.content, content)
    }
  }

  return (
    <div>
      <Head>
        <title>Personal Text Editor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-4 mt-6 text-center font-bold text-xl font-inter">
        Start editing with our text editor
      </h1>
      <div className="max-w-2xl min-h-screen mx-auto p-4">
        <Editor
          editor={editor}
          value={initialValue}
          onChange={handleOnChange}
        />
      </div>
    </div>
  )
}
