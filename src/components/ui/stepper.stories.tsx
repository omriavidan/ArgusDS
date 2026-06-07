import type { Meta, StoryObj } from "@storybook/react";
import { Stepper, type Step } from "./stepper";

const meta: Meta<typeof Stepper> = {
  title: "UI/Stepper",
  component: Stepper,
  argTypes: {
    currentStep: { control: "number" },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps: Step[] = [
  { label: "Account", description: "Create your account" },
  { label: "Profile", description: "Set up your profile" },
  { label: "Preferences", description: "Configure settings" },
  { label: "Complete", description: "All done!" },
];

export const Horizontal: Story = {
  args: {
    steps,
    currentStep: 1,
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-[520px]">
      <Stepper {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    steps,
    currentStep: 2,
    orientation: "vertical",
  },
  render: (args) => (
    <div className="w-[280px]">
      <Stepper {...args} />
    </div>
  ),
};

export const AllCompleted: Story = {
  args: {
    steps,
    currentStep: 4,
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-[520px]">
      <Stepper {...args} />
    </div>
  ),
};

export const FirstStep: Story = {
  args: {
    steps,
    currentStep: 0,
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-[520px]">
      <Stepper {...args} />
    </div>
  ),
};
