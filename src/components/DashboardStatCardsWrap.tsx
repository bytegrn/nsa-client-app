import DashboardStatCard from "./DashboardStatCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function DashboardStatCardsWrap() {
  const DASHBOARD_STATS: {
    title: string;
    count: number;
    percentageValue: number;
    trend: "high" | "low";
  }[] = [
    {
      title: "New Tickets",
      count: 5,
      percentageValue: 100,
      trend: "high",
    },
    {
      title: "Tickets in Progress",
      count: 32,
      percentageValue: 100,
      trend: "high",
    },
    {
      title: "Closed Tickets",
      count: 176,
      percentageValue: 100,
      trend: "high",
    },
    {
      title: "Total Tickets",
      count: 213,
      percentageValue: 100,
      trend: "high",
    },
  ];
  return (
    <div className="flex flex-wrap px-6 items-start flex-row gap-6 whitespace-nowrap w-full">
      {DASHBOARD_STATS.map(({ title, count, percentageValue, trend }) => (
        <DashboardStatCard
          key={title}
          title={title}
          count={count}
          percentageValue={percentageValue}
          trend={trend}
        />
      ))}
    </div>
  );
}
