"use client";

import PriorityBadge from "@/components/PriorityBadge";
import { Ticket } from "@/types/ticket";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "ticketId",
    header: "Ticket ID",
    cell: ({ row }) => (
      <p className="text-[14px] font-medium leading-5 text-ui-gray-900">
        {row.getValue("ticketId")}
      </p>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <p className="text-[14px] font-normal leading-5 text-ui-gray-500">
        {row.getValue("title")}
      </p>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => <PriorityBadge priority={row.getValue("priority")} />,
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.original.user;
      return (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date Generated",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const ticketStatus = row.original.status;
      const ticketActionSrc =
        ticketStatus === "closed" ? "check-dull.svg" : "check.svg";

      return (
        <div className="flex items-center">
          <div className="p-[10px] w-10">
            <Image src={"/eye.svg"} width={20} height={20} alt="an eye icon" />
          </div>
          <div className="p-[10px] w-10">
            <Image
              src={`/${ticketActionSrc}`}
              width={20}
              height={20}
              alt="a check icon"
            />
          </div>
        </div>
      );
    },
  },
];
