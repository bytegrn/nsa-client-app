"use client";

import { Send } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

export default function ChatBar() {
  const textAreaInput = useRef<HTMLTextAreaElement>(null);
  const [textAreaInputValue, setTextAreaNputValue] = useState("");

  const initialInputHeight = textAreaInput.current?.scrollHeight;

  const adjustHeightDynamically = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const el = textAreaInput.current;

    setTextAreaNputValue(e.target.value);

    if (!el) return;
    el.style.height = `${initialInputHeight}px`;
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <div className="flex border-t border-ui-gray-200 bg-white gap-3 py-4 items-center px-6 rounded-b-[16px]">
      <div className="w-full border rounded-[8px] border-ui-gray-300">
        <textarea
          placeholder="Ask for IT Support"
          required
          spellCheck="false"
          onInput={adjustHeightDynamically}
          ref={textAreaInput}
          rows={1}
          className="overflow-auto shadow-inner border-ui-gray-300 h-[55px] py-[15px] flex items-center text-[16px] font-normal text-ui-gray-500 w-full max-h-[250px] resize-none px-[14px] rounded-[8px]"
        />
      </div>

      <button
        aria-label="Submit"
        role="button"
        tabIndex={0}
        disabled={textAreaInputValue.length < 2}
        onClick={() => console.log("Clicking!")}
        className={`rounded-[8px] ${
          textAreaInputValue.length < 2 ? "bg-ui-primary-200" : "bg-primary"
        } transition-all flex items-center justify-center h-[55px] w-[55px] hover:bg-primary`}
      >
        <Send size={"20px"} color="#ffffff" />
      </button>
    </div>
  );
}
