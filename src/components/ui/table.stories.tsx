import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "./table";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const passes = [
  { id: "SAT-001", satellite: "LANDSAT-8", status: "Done", duration: "12m 45s" },
  { id: "SAT-002", satellite: "SENTINEL-2A", status: "Failed", duration: "8m 20s" },
  { id: "SAT-003", satellite: "TERRA", status: "Pending", duration: "15m 30s" },
  { id: "SAT-004", satellite: "AQUA", status: "Available", duration: "11m 15s" },
  { id: "SAT-005", satellite: "SENTINEL-1B", status: "Done", duration: "9m 40s" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Recent satellite passes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Satellite</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {passes.map((pass) => (
          <TableRow key={pass.id}>
            <TableCell className="font-medium">{pass.id}</TableCell>
            <TableCell>{pass.satellite}</TableCell>
            <TableCell>{pass.status}</TableCell>
            <TableCell className="text-right">{pass.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Satellite</TableHead>
          <TableHead className="text-right">Passes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>LANDSAT-8</TableCell>
          <TableCell className="text-right">24</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SENTINEL-2A</TableCell>
          <TableCell className="text-right">18</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>TERRA</TableCell>
          <TableCell className="text-right">12</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">54</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
