import { TICKET_PRIORITY } from "@/types/color_indicators";
import { COLOR_INDICATORS } from "@/constants";

export default function PriorityBadge({
  priority,
}: {
  priority: "high" | "low" | "medium";
}) {
  return (
    <div className="flex items-center justify-center gap-[6px] py-[2px] rounded-[16px] bg-ui-error-50">
      <div
        className="w-[6px] h-[6px] rounded-[6px]"
        style={{
          backgroundColor:
            COLOR_INDICATORS[TICKET_PRIORITY[priority]].foreground,
        }}
      />
      <p
        className="text-[12px] font-medium leading-[18px] text-ui-error-700"
        style={{
          backgroundColor:
            COLOR_INDICATORS[TICKET_PRIORITY[priority]].background,
        }}
      >
        {priority[0].toUpperCase().concat(priority.slice(1))}
      </p>
    </div>
  );
}
