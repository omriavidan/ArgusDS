import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./password-input";
import { Label } from "./label";

const meta: Meta<typeof PasswordInput> = {
  title: "UI/PasswordInput",
  component: PasswordInput,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "Enter password",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <PasswordInput {...args} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[320px] space-y-2">
      <Label htmlFor="password">Password</Label>
      <PasswordInput id="password" placeholder="Enter your password" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[320px]">
      <PasswordInput disabled placeholder="Disabled" />
    </div>
  ),
};
