'use client';

import { TipTap } from '@/src/widgets/tiptap';
import React, { useCallback, useState } from 'react';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import { Button } from '@/src/shared/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/src/shared/ui/dropdown-menu';
import { Input } from '@/src/shared/ui/input';

export default function NoteIdPage() {
  const [selectedModel, setSelectedModel] = useState("Grok 3");

  return (
    <>
      <div className='w-full max-w-5xl mx-auto'>
        <div className="p-4 space-y-4">
          {/* TipTap 에디터 */}
          <TipTap />


          <div className='border border-gray-200 rounded-xl p-4'>
            <textarea
              className="w-full bg-transparent focus:outline-none text-primary align-bottom min-h-14 my-0 mb-5 resize-none"
              style={{
                height: "auto", // 높이를 콘텐츠에 맞게 조정
                overflow: "auto", // 스크롤 대신 높이 증가
                maxHeight: "300px", // 최대 높이 제한
              }}
              onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const target = e.target;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
              placeholder="무엇을 알고 싶으신가요?"
            ></textarea>
            <div className='flex justify-end'>
              <Button variant="outline" size="icon" className='cursor-pointer'>
                <ChevronUp />
              </Button>
            </div>
          </div>

          {/* AI 검색 화면 */}
          <div className="flex flex-col items-center space-y-2">
            {/* 입력 필드 */}
            <Input
              type="text"
              placeholder="무엇을 알고 싶으신가요?"
              className="w-full max-w-2xl border rounded-lg p-2 text-gray-700"
            />

            {/* 버튼 및 드롭다운 */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="flex items-center space-x-1">
                <span>🔍</span>
                <span>DeepSearch</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-1">
                <span>💡</span>
                <span>Think</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-1">
                    <span>{selectedModel}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onSelect={() => setSelectedModel("Grok 3")}>
                    Grok 3
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setSelectedModel("Grok 2")}>
                    Grok 2
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setSelectedModel("Grok 1")}>
                    Grok 1
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* 하단 링크 텍스트 */}
            <div className="text-sm text-blue-600 cursor-pointer hover:underline">
              Switch to Personas
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
