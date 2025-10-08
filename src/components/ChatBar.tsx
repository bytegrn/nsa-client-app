"use client";

import { Send } from "lucide-react";
import {
  ChangeEvent,
  InputEvent,
  InputEventHandler,
  useEffect,
  useRef,
} from "react";

export default function ChatBar() {
  const textAreaInput = useRef<HTMLTextAreaElement>(null);

  const initialInputHeight = textAreaInput.current?.scrollHeight;

  const adjustHeightDynamically = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const el = textAreaInput.current;

    if (!el) return;

    if (e.target.value.trim() === "") {
      el.style.height = `${initialInputHeight}px`;
    } else {
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  return (
    <div className="flex border-t border-ui-gray-200 bg-white gap-3 py-4 items-center px-6 rounded-b-[16px]">
      <textarea
        placeholder="Ask for IT Support"
        required
        spellCheck="false"
        onInput={adjustHeightDynamically}
        ref={textAreaInput}
        rows={1}
        className="border-[1px] box-border overflow-y-auto border-ui-gray-300 h-[55px] py-[15px] flex items-center text-[16px] font-normal text-ui-gray-500 w-full max-h-[250px] resize-none px-[14px] shadow-none rounded-[8px]"
      />

      <div
        aria-label="Submit"
        role="button"
        tabIndex={0}
        className="rounded-[8px] bg-primary h-11 w-11 flex items-center justify-center"
      >
        <Send size={"20px"} color="#ffffff" />
      </div>
    </div>
  );
}
