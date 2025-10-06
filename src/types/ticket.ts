export interface Ticket {
  id: string;
  ticketId: string;
  title: string;
  priority: "high" | "low" | "medium";
  user: { name: string; email: string };
  date: string;
  status: "new" | "in progress" | "closed";
}
