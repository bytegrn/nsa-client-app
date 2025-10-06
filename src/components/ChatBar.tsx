"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ChatBar() {
  return (
    <div className="px-6 absolute left-0 right-0">
      <div className="flex bg-white gap-3 items-end px-6 py-4 rounded-b-[16px]">
        <Textarea
          placeholder="Ask for IT support"
          className="border-none max-h-[77px] resize-none px-[14px] shadow-none rounded-[8px]"
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
    </div>
  );
}
