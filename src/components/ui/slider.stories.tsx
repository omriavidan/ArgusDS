import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
import { Label } from "./label";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  argTypes: {
    disabled: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
  args: {
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    className: "w-[300px]",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <span className="text-xs text-muted-foreground">75%</span>
      </div>
      <Slider defaultValue={[75]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    className: "w-[300px]",
  },
};

export const Steps: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
    className: "w-[300px]",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [40],
    disabled: true,
    className: "w-[300px]",
  },
};
