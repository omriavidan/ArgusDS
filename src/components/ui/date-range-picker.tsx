"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface DateRangePickerProps {
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  numberOfMonths?: number;
  disabled?: boolean;
  className?: string;
}

function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = "Pick a date range",
  numberOfMonths = 2,
  disabled = false,
  className,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          data-slot="date-range-picker-trigger"
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal",
            !dateRange?.from && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, "LLL dd, y")} –{" "}
                {format(dateRange.to, "LLL dd, y")}
              </>
            ) : (
              format(dateRange.from, "LLL dd, y")
            )
          ) : (
            placeholder
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        data-slot="date-range-picker-content"
        className="w-auto p-0"
        align="start"
      >
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={onDateRangeChange}
          numberOfMonths={numberOfMonths}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export { DateRangePicker };
