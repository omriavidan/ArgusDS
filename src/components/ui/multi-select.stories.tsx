import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MultiSelect, type MultiSelectOption } from "./multi-select";

const meta: Meta<typeof MultiSelect> = {
  title: "UI/MultiSelect",
  component: MultiSelect,
  argTypes: {
    placeholder: { control: "text" },
    maxDisplayedItems: { control: "number" },
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
    placeholder: "Select items…",
    maxDisplayedItems: 3,
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const fruits: MultiSelectOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
  { value: "kiwi", label: "Kiwi" },
  { value: "mango", label: "Mango" },
  { value: "orange", label: "Orange" },
  { value: "peach", label: "Peach" },
  { value: "strawberry", label: "Strawberry" },
  { value: "watermelon", label: "Watermelon" },
];

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <div className="w-[320px]">
        <MultiSelect
          {...args}
          options={fruits}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </div>
    );
  },
};

export const WithPreselected: Story = {
  render: () => {
    const [selected, setSelected] = useState(["apple", "cherry", "mango"]);
    return (
      <div className="w-[320px]">
        <MultiSelect
          options={fruits}
          selected={selected}
          onSelectedChange={setSelected}
          placeholder="Select fruits…"
        />
      </div>
    );
  },
};

export const ManyOptions: Story = {
  render: () => {
    const options: MultiSelectOption[] = Array.from({ length: 30 }, (_, i) => ({
      value: `tag-${i + 1}`,
      label: `Tag ${i + 1}`,
    }));
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <div className="w-[320px]">
        <MultiSelect
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          placeholder="Select tags…"
          searchPlaceholder="Search tags…"
        />
      </div>
    );
  },
};

export const MaxDisplayed: Story = {
  render: () => {
    const [selected, setSelected] = useState([
      "apple",
      "banana",
      "cherry",
      "grape",
      "kiwi",
      "mango",
    ]);
    return (
      <div className="w-[320px]">
        <MultiSelect
          options={fruits}
          selected={selected}
          onSelectedChange={setSelected}
          maxDisplayedItems={2}
          placeholder="Select fruits…"
        />
      </div>
    );
  },
};
