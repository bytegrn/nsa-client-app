import { ArrowUp } from "lucide-react";

interface TrendChipProps {
  trend: "high" | "low";
  percentageValue: number;
}

export default function TrendChip({ trend, percentageValue }: TrendChipProps) {
  const TrendColors = {
    high: "#12B76A",
    low: "#12B76A",
  };
  return (
    <div className="flex gap-1 bg-ui-success-50 rounded-[16px] py-[2px] pl-[10px] pr-2 items-center">
      <ArrowUp strokeWidth={"3px"} size={"18px"} color={TrendColors[trend]} />
      <span className={`text-ui-success-700 text-[14px] font-medium leading-5`}>
        {percentageValue}
      </span>
    </div>
  );
}
