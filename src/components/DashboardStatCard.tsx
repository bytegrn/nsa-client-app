import TrendChip from "./TrendChip";

export default function DashboardStatCard({
  title,
  count,
  percentageValue,
  trend,
}: {
  title: string;
  count: number;
  percentageValue: number;
  trend: "high" | "low";
}) {
  return (
    <div className="rounded-[8px] bg-white flex flex-col gap-2 text-[14px] font-medium text-ui-gray-500 leading-5 max-w-[290px] flex-1 px-6 py-4 max-h-[104[px] h-[104px] border-[1px]">
      <p>{title}</p>
      <div className="flex justify-between items-end">
        <h4 className="text-[36px] font-medium leading-11 text-ui-gray-900">
          {count}
        </h4>
        <TrendChip trend={trend} percentageValue={percentageValue} />
      </div>
    </div>
  );
}
