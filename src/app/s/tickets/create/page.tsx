import Header from "@/components/Header";
import Image from "next/image";
import { ticketSupportQuickActions } from "@/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBar from "@/components/ChatBar";

export default function createTicket() {
  return (
    <div>
      <Header
        title="Create Ticket"
        subTitle="Create support tickets with agent"
        border
      />

      <ScrollArea className="h-screen px-6 pt-8">
        {/* scroll item container */}
        <div className="rounded-t-[16px] bg-white relative">
          <div className="rounded-t-[16px] py-10 flex flex-col items-center">
            <Image
              src={"/bot.svg"}
              height={160}
              width={132}
              alt="a bot image"
              className="mx-auto mb-6"
            />

            <div className="flex flex-col items-center gap-4">
              <h2 className="text-[30px] text-center leading-[38px] font-semibold">
                Hello, Chinedu!
              </h2>
              <p className="text-center text-[18px] leading-[28px] text-ui-gray-500">
                How can I help you today?
              </p>
            </div>

            <div className="flex gap-4 max-w-[665px] flex-wrap mt-10 items-stretch justify-center">
              {ticketSupportQuickActions.map(({ command, issue }) => (
                <div
                  key={command}
                  className="border flex-1 min-w-[211px] max-w-[211px] rounded-[8px] p-4 border-ui-gray-300 flex flex-col gap-1"
                >
                  <h3 className="text-[14px] leading-5 font-semibold">
                    {command}
                  </h3>
                  <p className="text-[14px] leading-5 font-normal text-ui-gray-500">
                    {issue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* chatbox */}
        <div className=" bg-red-200">
          <ChatBar />
        </div>
      </ScrollArea>
    </div>
  );
}
