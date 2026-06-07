"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface ComboboxOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  className?: string;
}

function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select an option…",
  searchPlaceholder = "Search…",
  emptyMessage = "No results found.",
  disabled = false,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          data-slot="combobox-trigger"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between font-normal",
            !value && "text-muted-foreground",
            className,
          )}
        >
          <span className="flex items-center gap-2 truncate">
            {selectedOption?.icon}
            {selectedOption?.label ?? placeholder}
          </span>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        data-slot="combobox-content"
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onValueChange?.(
                      option.value === value ? "" : option.value,
                    );
                    setOpen(false);
                  }}
                >
                  <span className="flex items-center gap-2">
                    {option.icon}
                    {option.label}
                  </span>
                  <Check
                    className={cn(
                      "ml-auto size-4",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { Combobox };
