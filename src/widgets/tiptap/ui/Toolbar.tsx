'use client'


import { cn } from '@/src/shared/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/src/shared/ui/tooltip';
import { Editor } from '@tiptap/react';
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Heading1,
  Heading3,
  Video,
  Image,
  SquareCode
} from "lucide-react";
import { useRef, useState } from 'react';



interface ToolBarProps {
  editor: Editor | null;
  content?: string;
}

export function Toolbar({ editor, content }: ToolBarProps) {

  if (!editor) return null;
  const fileRef = useRef<HTMLInputElement>(null)

  const [height, setHeight] = useState('480')
  const [width, setWidth] = useState('640')


  return (
    <>
      <div className='sticky left-0 top-0 border-b rounded-t-lg bg-white z-30'>
        <div className="flex items-center justify-start overflow-x-auto w-auto gap-2 p-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleBold().run();
                }}
                className={cn(
                  editor.isActive("bold") ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <Bold className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>굵게</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleItalic().run();
                }}
                className={cn(
                  editor.isActive("italic") ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <Italic className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>기울임꼴</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleStrike().run();
                }}
                className={cn(
                  editor.isActive("strike") ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <Strikethrough className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>취소선</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleHeading({ level: 1 }).run();
                }}
                className={cn(
                  editor.isActive('heading', { level: 1 }) ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <Heading1 className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>제목1</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleHeading({ level: 2 }).run();
                }}
                className={cn(
                  editor.isActive('heading', { level: 2 }) ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <Heading2 className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>제목2</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleHeading({ level: 3 }).run();
                }}
                className={cn(
                  editor.isActive('heading', { level: 3 }) ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <Heading3 className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>제목3</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleBulletList().run();
                }}
                className={cn(
                  editor.isActive("bulletList") ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <List className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>글머리 기호 목록</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleOrderedList().run();
                }}
                className={cn(
                  editor.isActive("orderedList") ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <ListOrdered className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>번호 목록</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleCode().run()
                }}
                className={cn(
                  editor.isActive("code") ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <Code className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>코드</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleCodeBlock().run()
                }}
                className={cn(
                  editor.isActive("codeBlock") ? "bg-black text-white " : "text-black",
                  "p-2 rounded-lg hover:bg-black hover:bg-opacity-20"
                )}
              >
                <SquareCode className='w-5 h-5' />
              </TooltipTrigger>
              <TooltipContent>
                <p>코드블록</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  )
}

