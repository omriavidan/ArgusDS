import type { Meta, StoryObj } from "@storybook/react";
import { HoldButton } from "./hold-button";
import { useState } from "react";

const meta: Meta<typeof HoldButton> = {
  title: "UI/HoldButton",
  component: HoldButton,
  tags: ["autodocs"],
  argTypes: {
    holdDuration: {
      control: { type: "number" },
      description: "Duration in milliseconds the button must be held.",
      defaultValue: 1500,
    },
    onComplete: {
      action: "completed",
      description: "Callback fired when the hold duration is reached.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HoldButton>;

export const Default: Story = {
  args: {
    children: "PULL",
    holdDuration: 1500,
    onComplete: () => alert("Action Completed!"),
  },
  render: (args) => {
    // We use a small wrapper just to show a visual confirmation when the action completes in Storybook
    const [status, setStatus] = useState<"idle" | "completed">("idle");

    return (
      <div className="flex flex-col items-center gap-6 p-8">
        <HoldButton
          {...args}
          onComplete={() => {
            setStatus("completed");
            args.onComplete();
            setTimeout(() => setStatus("idle"), 2000);
          }}
        />
        {status === "completed" && (
          <div className="text-emerald-400 text-sm animate-in fade-in slide-in-from-bottom-2">
            Action Successfully Triggered!
          </div>
        )}
      </div>
    );
  },
};
