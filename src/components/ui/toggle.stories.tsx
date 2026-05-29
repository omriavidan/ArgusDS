import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";
import { Bold, Italic, Underline } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: <Bold className="size-4" />,
    "aria-label": "Toggle bold",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: <Italic className="size-4" />,
    "aria-label": "Toggle italic",
  },
};

export const WithText: Story = {
  args: {
    children: (
      <>
        <Bold className="size-4" />
        Bold
      </>
    ),
    "aria-label": "Toggle bold",
  },
};

export const Pressed: Story = {
  args: {
    defaultPressed: true,
    children: <Bold className="size-4" />,
    "aria-label": "Toggle bold",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Underline className="size-4" />,
    "aria-label": "Toggle underline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: <Bold className="size-4" />,
    "aria-label": "Toggle bold",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: <Bold className="size-4" />,
    "aria-label": "Toggle bold",
  },
};
