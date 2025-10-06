import DashboardStatCardsWrap from "@/components/DashboardStatCardsWrap";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TicketsTable } from "./tickets-table";
import { columns } from "./columns";
import { TICKETS_DATA } from "@/data/tickets";

export default function Dashboard() {
  return (
    <div>
      <Header
        border
        title="Welcome back, Abiola"
        subTitle="Track, manage and resolve your support tickets."
        rightButtons={[
          <Button
            size={"sm"}
            className="rounded-[8px] capitalize text-[14px] font-medium leading-5"
          >
            <Plus />
            Create Ticket
          </Button>,
        ]}
      />

      <div className="pt-8">
        <DashboardStatCardsWrap />
      </div>

      <div>
        <div></div>
        <TicketsTable columns={columns} data={TICKETS_DATA} />
      </div>
    </div>
  );
}
