import { ticketSupportQuickActions } from "@/constants";

export default function QuickActions() {
  return (
    <div className="flex gap-4 max-w-[665px] flex-wrap mt-10 items-stretch justify-center">
      {ticketSupportQuickActions.map(({ command, issue }) => (
        <div
          key={command}
          className="border min-w-[211px] max-w-[211px] rounded-[8px] p-4 border-ui-gray-300 flex flex-col gap-1"
        >
          <h3 className="text-[14px] leading-5 font-semibold">{command}</h3>
          <p className="text-[14px] leading-5 font-normal text-ui-gray-500">
            {issue}
          </p>
        </div>
      ))}
    </div>
  );
}
