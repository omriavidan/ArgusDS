"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  disabled = false,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          data-slot="date-picker-trigger"
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {date ? format(date, "PPP") : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent data-slot="date-picker-content" className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day) => {
            onDateChange?.(day);
            setOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker };
