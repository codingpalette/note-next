'use client';

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlock from '@tiptap/extension-code-block';
import { Toolbar } from "./Toolbar";

const extensions = [StarterKit, CodeBlock];

interface TipTapProps {
  content?: string;
  onChangeContent?: (newContent: string) => void;
}

export function TipTap({ content, onChangeContent }: TipTapProps) {
  const editor = useEditor({
    extensions,
    content: content || '<p>내용을 입력하세요...</p>',
    onUpdate: ({ editor }) => {
      if (onChangeContent) {
        onChangeContent(editor.getHTML());
      }
    },
  });

  useEffect(() => {
    if (editor && content && editor.getHTML() !== content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <div className="wysiwyg flex flex-col border rounded-lg bg-white relative w-full max-w-full text-left outline-none">
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="px-4 py-2 outline-none flex-1 overflow-y-auto min-h-[60px] max-h-[calc(100%-40px)]" // Toolbar 높이(약 40px) 제외
      />
    </div>
  );
}
