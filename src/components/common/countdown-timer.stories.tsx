import type { Meta, StoryObj } from "@storybook/react";
import { CountdownTimer } from "./countdown-timer";

const meta: Meta<typeof CountdownTimer> = {
  title: "Common/CountdownTimer",
  component: CountdownTimer,
};

export default meta;
type Story = StoryObj<typeof CountdownTimer>;

export const DefaultInProgress: Story = {
  args: {
    // 9 seconds from now (bar should be starting to fill up)
    passTime: new Date(Date.now() + 9 * 1000).toISOString(),
    totalDurationSeconds: 10,
  },
};

export const Soon: Story = {
  args: {
    // 5 seconds from now (bar should be exactly 50% full)
    passTime: new Date(Date.now() + 5 * 1000).toISOString(),
    totalDurationSeconds: 10,
  },
};

export const Done: Story = {
  args: {
    // 1 hour ago
    passTime: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
};
