import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./sonner";
import { Button } from "./button";
import { toast } from "sonner";

const meta: Meta<typeof Toaster> = {
  title: "UI/Sonner",
  component: Toaster,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast("Event has been created", {
        description: "Sunday, January 5, 2026 at 9:00 AM",
      })}
    >
      Show Toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.success("Pass data saved successfully")}
    >
      Success Toast
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.error("Failed to process satellite data")}
    >
      Error Toast
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Pass has been deleted", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Toast with Action
    </Button>
  ),
};
