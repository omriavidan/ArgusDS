import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";
import { Label } from "./label";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

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
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const SettingsGroup: Story = {
  render: () => (
    <div className="space-y-4">
      {[
        { id: "notifications", label: "Push Notifications", defaultChecked: true },
        { id: "marketing", label: "Marketing Emails", defaultChecked: false },
        { id: "updates", label: "Product Updates", defaultChecked: true },
      ].map((setting) => (
        <div key={setting.id} className="flex items-center justify-between w-64">
          <Label htmlFor={setting.id} className="text-sm">{setting.label}</Label>
          <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
        </div>
      ))}
    </div>
  ),
};
