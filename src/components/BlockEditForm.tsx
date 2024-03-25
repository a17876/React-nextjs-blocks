"use client";
import * as actions from "@/actions";
import Editor, { OnChange } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";


interface BlockEditFormProps {
  block: Snippet;
}

export default function BlockEditForm({ block }: BlockEditFormProps) {
  const [code, setCode] = useState(block.code);

  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  const editBlockAction = actions.editBlock.bind(null, block.id, code)

  return (
    <div className="mt-10">
        <h1 className="p-2">{block.title}</h1>
      <Editor
        height="30vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={block?.code}
        options={{ minimap: { enabled: false } }}
        onChange={ handleEditorChange }
      />
      <form action={ editBlockAction }>
        <button type="submit" className="p-2 border rounded">
            Save
        </button>
      </form>
    </div>
  );
}
