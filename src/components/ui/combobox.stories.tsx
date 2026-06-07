import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Globe,
  Laptop,
  Moon,
  Sun,
  Zap,
} from "lucide-react";
import { Combobox, type ComboboxOption } from "./combobox";

const meta: Meta<typeof Combobox> = {
  title: "UI/Combobox",
  component: Combobox,
  argTypes: {
    placeholder: { control: "text" },
    searchPlaceholder: { control: "text" },
    emptyMessage: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
    placeholder: "Select framework…",
    searchPlaceholder: "Search frameworks…",
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks: ComboboxOption[] = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "svelte", label: "SvelteKit" },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[280px]">
        <Combobox
          {...args}
          options={frameworks}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  },
};

const iconOptions: ComboboxOption[] = [
  { value: "light", label: "Light", icon: <Sun className="size-4" /> },
  { value: "dark", label: "Dark", icon: <Moon className="size-4" /> },
  { value: "system", label: "System", icon: <Laptop className="size-4" /> },
  { value: "auto", label: "Auto", icon: <Zap className="size-4" /> },
  { value: "global", label: "Global", icon: <Globe className="size-4" /> },
];

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[280px]">
        <Combobox
          options={iconOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select theme…"
          searchPlaceholder="Search themes…"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[280px]">
      <Combobox options={frameworks} disabled placeholder="Disabled…" />
    </div>
  ),
};

const manyOptions: ComboboxOption[] = Array.from({ length: 50 }, (_, i) => ({
  value: `option-${i + 1}`,
  label: `Option ${i + 1}`,
}));

export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[280px]">
        <Combobox
          options={manyOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select from 50 options…"
        />
      </div>
    );
  },
};
