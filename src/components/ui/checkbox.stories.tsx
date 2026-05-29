import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-sm font-normal">
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-2">
      {["Option A", "Option B", "Option C"].map((label) => (
        <div key={label} className="flex items-center space-x-2">
          <Checkbox id={label} />
          <Label htmlFor={label} className="text-sm font-normal">
            {label}
          </Label>
        </div>
      ))}
    </div>
  ),
};
