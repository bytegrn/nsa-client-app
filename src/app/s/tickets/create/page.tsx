import Header from "@/components/Header";
import Image from "next/image";
import { ticketSupportQuickActions } from "@/constants";
import ChatBar from "@/components/ChatBar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import QuickActions from "@/components/QuickActions";

export default function createTicket() {
  return (
    <div className="h-full flex flex-col w-full gap-2">
      <Header
        title="Create Ticket"
        subTitle="Create support tickets with agent"
        border
      />

      <div className="flex flex-col flex-1 overflow-auto scroll-smooth pt-8 px-6">
        {/* chat area */}
        <div className=" flex flex-col items-center flex-1 justify-center bg-white rounded-t-[16px]">
          <Image
            src={"/bot.svg"}
            height={160}
            width={132.11}
            alt="a bot image"
          />

          <div className="flex flex-col items-center gap-4 pt-6">
            <h4 className="text-[30px] leading-[38px] text-ui-gray-700 font-semibold">
              Hello Smart!
            </h4>
            <p className="text-[18px] text-center leading-[28px] text-ui-gray-500 font-normal">
              How can I help you today?
            </p>
          </div>

          <QuickActions />
        </div>
      </div>

      {/* chatbox */}
      <div className="px-6 w-full h-[76px]">
        <ChatBar />
      </div>
    </div>
  );
}
