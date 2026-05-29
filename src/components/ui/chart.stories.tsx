import type { Meta, StoryObj } from "@storybook/react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "./chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const meta: Meta<typeof ChartContainer> = {
  title: "UI/Chart",
  component: ChartContainer,
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const chartData = [
  { month: "Jan", passes: 186, failed: 12 },
  { month: "Feb", passes: 305, failed: 8 },
  { month: "Mar", passes: 237, failed: 15 },
  { month: "Apr", passes: 73, failed: 3 },
  { month: "May", passes: 209, failed: 10 },
  { month: "Jun", passes: 214, failed: 6 },
];

const chartConfig = {
  passes: {
    label: "Passes",
    color: "var(--chart-1)",
  },
  failed: {
    label: "Failed",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export const BarChartStory: Story = {
  name: "Bar Chart",
  render: () => (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full max-w-md">
      <BarChart data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="passes" fill="var(--color-passes)" radius={4} />
        <Bar dataKey="failed" fill="var(--color-failed)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};
