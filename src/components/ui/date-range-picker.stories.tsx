import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { DateRangePicker } from "./date-range-picker";

const meta: Meta<typeof DateRangePicker> = {
  title: "UI/DateRangePicker",
  component: DateRangePicker,
  argTypes: {
    placeholder: { control: "text" },
    numberOfMonths: { control: "number" },
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
    placeholder: "Pick a date range",
    numberOfMonths: 2,
  },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  render: (args) => {
    const [range, setRange] = useState<DateRange | undefined>(undefined);
    return (
      <div className="w-[340px]">
        <DateRangePicker
          {...args}
          dateRange={range}
          onDateRangeChange={setRange}
        />
      </div>
    );
  },
};

export const WithPreselectedRange: Story = {
  render: () => {
    const today = new Date();
    const [range, setRange] = useState<DateRange | undefined>({
      from: today,
      to: addDays(today, 7),
    });
    return (
      <div className="w-[340px]">
        <DateRangePicker dateRange={range} onDateRangeChange={setRange} />
      </div>
    );
  },
};

export const SingleMonth: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>(undefined);
    return (
      <div className="w-[280px]">
        <DateRangePicker
          dateRange={range}
          onDateRangeChange={setRange}
          numberOfMonths={1}
        />
      </div>
    );
  },
};
