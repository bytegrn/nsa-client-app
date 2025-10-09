import Header from "@/components/Header";
import Image from "next/image";
import ChatBar from "@/components/ChatBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import QuickActions from "@/components/QuickActions";

export default function ticketSupport() {
  return (
    <div className="h-full flex flex-col w-full">
      <Header
        title="Create Ticket"
        subTitle="Create support tickets with agent"
        border
      />

      <div className="flex flex-col h-full pt-8 relative px-6 overflow-hidden">
        {/* chat area */}
        <ScrollArea className="bg-white rounded-t-[16px] py-8 h-[calc(100%-87px)] pr-6">
          <div className="flex-1 flex flex-col items-center">
            <Image
              src={"/bot.svg"}
              alt="a bot image"
              width={132}
              height={160}
            />
            <QuickActions />
          </div>
        </ScrollArea>

        {/* chatbox */}
        <div className="absolute bottom-0 left-6 right-6">
          <ChatBar />
        </div>
      </div>
    </div>
  );
}
