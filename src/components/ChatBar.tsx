"use client";

import { Send } from "lucide-react";
import { useRef } from "react";

export default function ChatBar() {
  const textAreaInput = useRef<HTMLTextAreaElement>(null);

  const initialInputHeight = textAreaInput.current?.scrollHeight;

  const addjustHeightDynamically = () => {
    if (textAreaInput.current) {
      textAreaInput.current.style.height = `${initialInputHeight}px`;
      textAreaInput.current.style.height = `${textAreaInput.current.scrollHeight}px`;
    }
  };

  return (
    <div className="flex bg-white gap-3 items-center px-6 rounded-b-[16px]">
      <textarea
        placeholder="Ask for IT Support"
        required
        spellCheck="false"
        onInput={addjustHeightDynamically}
        ref={textAreaInput}
        className="border-none h-[55px] py-[15px] overflow-y-auto flex items-center text-[16px] font-normal text-ui-gray-500 w-full max-h-[250px] resize-none px-[14px] shadow-none rounded-[8px]"
      />

      <button aria-label="Submit" className="rounded-[8px] bg-primary">
        <Send size={"20px"} color="#ffffff" />
      </button>
    </div>
  );
}
