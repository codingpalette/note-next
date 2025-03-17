'use client';

import React from "react";
import { Handle, NodeResizer, Position } from "@xyflow/react";
import { TipTap } from "../../tiptap";

interface ResizableNodeSelectedProps {
  data: {
    label: string;
    content?: string;
    onChangeContent?: (newContent: string) => void;
  };
  selected: boolean;
}

export function ResizableNodeSelected({ data, selected }: ResizableNodeSelectedProps) {
  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={200}
        minHeight={100} // 최소 높이 설정
      />
      <Handle type="target" position={Position.Top} />
      <div className="p-4 w-full bg-white border rounded flex flex-col">
        <div>11</div>
        {/* <TipTap */}
        {/*   content={data.content} */}
        {/*   onChangeContent={data.onChangeContent} */}
        {/* /> */}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
