import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex justify-between items-center">
      <Header
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
    </div>
  );
}
