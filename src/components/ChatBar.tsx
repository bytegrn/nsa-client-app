"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ChatBar() {
  return (
    <div className="flex bg-white gap-3 items-end px-6 py-4 rounded-b-[16px]">
      <textarea
        placeholder="Ask for IT Support"
        className="border-none leading-normal flex items-center h-full text-[16px] font-normal text-ui-gray-500 w-full max-h-[77px] resize-none px-[14px] shadow-none rounded-[8px]"
      />

      <Button
        variant="outline"
        size="icon"
        aria-label="Submit"
        className="rounded-[8px] bg-primary"
      >
        <Send size={"20px"} color="#ffffff" />
      </Button>
    </div>
  );
}
