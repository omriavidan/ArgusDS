import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";
import { Input } from "./input";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Label Text",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-sm font-normal">
        I agree to the terms of service
      </Label>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="required-field">
        Required Field <span className="text-destructive">*</span>
      </Label>
      <Input id="required-field" placeholder="This field is required" />
    </div>
  ),
};
