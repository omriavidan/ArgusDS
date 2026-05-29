import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";
import { Label } from "./label";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
  },
  args: {
    placeholder: "Type your message here...",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "This is some existing text content that can be edited.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "This textarea is disabled",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
      <p className="text-xs text-muted-foreground">
        Your message will be sent to support.
      </p>
    </div>
  ),
};

export const CustomRows: Story = {
  args: {
    rows: 8,
    placeholder: "Write a longer message...",
  },
};
