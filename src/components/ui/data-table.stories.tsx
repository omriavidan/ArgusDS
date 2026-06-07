import type { Meta, StoryObj } from "@storybook/react";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { DataTable } from "./data-table";
import { Button } from "./button";
import { Badge } from "./badge";

const meta: Meta<typeof DataTable> = {
  title: "UI/DataTable",
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

// --- Sample data ---
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  { id: "INV001", amount: 316, status: "success", email: "alice@example.com" },
  { id: "INV002", amount: 242, status: "success", email: "bob@example.com" },
  { id: "INV003", amount: 837, status: "processing", email: "carol@example.com" },
  { id: "INV004", amount: 874, status: "success", email: "dave@example.com" },
  { id: "INV005", amount: 721, status: "failed", email: "eve@example.com" },
  { id: "INV006", amount: 150, status: "pending", email: "frank@example.com" },
  { id: "INV007", amount: 490, status: "success", email: "grace@example.com" },
  { id: "INV008", amount: 312, status: "pending", email: "hank@example.com" },
  { id: "INV009", amount: 665, status: "processing", email: "iris@example.com" },
  { id: "INV010", amount: 130, status: "failed", email: "jack@example.com" },
  { id: "INV011", amount: 999, status: "success", email: "kate@example.com" },
  { id: "INV012", amount: 450, status: "pending", email: "leo@example.com" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "success"> = {
  pending: "secondary",
  processing: "default",
  success: "success",
  failed: "destructive",
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Invoice",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={statusVariant[status] ?? "default"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <span className="font-medium">{formatted}</span>;
    },
  },
];

export const Default: Story = {
  render: () => <DataTable columns={columns} data={data} pageSize={5} />,
};

export const WithSearch: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      searchKey="email"
      searchPlaceholder="Filter emails…"
      pageSize={5}
    />
  ),
};

export const WithSorting: Story = {
  render: () => (
    <DataTable columns={columns} data={data} pageSize={10} />
  ),
  parameters: {
    docs: {
      description: {
        story: "Click the Amount column header to sort.",
      },
    },
  },
};

export const Empty: Story = {
  render: () => <DataTable columns={columns} data={[]} />,
};
