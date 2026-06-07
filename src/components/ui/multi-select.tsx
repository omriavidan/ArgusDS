"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";
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

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  selected?: string[];
  onSelectedChange?: (selected: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  maxDisplayedItems?: number;
  disabled?: boolean;
  className?: string;
}

function MultiSelect({
  options,
  selected = [],
  onSelectedChange,
  placeholder = "Select items…",
  searchPlaceholder = "Search…",
  emptyMessage = "No results found.",
  maxDisplayedItems = 3,
  disabled = false,
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = (value: string) => {
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onSelectedChange?.(updated);
  };

  const handleRemove = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectedChange?.(selected.filter((v) => v !== value));
  };

  const displayedItems = selected.slice(0, maxDisplayedItems);
  const overflowCount = selected.length - maxDisplayedItems;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          data-slot="multi-select-trigger"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between font-normal h-auto min-h-9",
            !selected.length && "text-muted-foreground",
            className,
          )}
        >
          {selected.length > 0 ? (
            <span className="flex flex-wrap items-center gap-1">
              {displayedItems.map((val) => {
                const option = options.find((o) => o.value === val);
                return (
                  <Badge
                    key={val}
                    variant="secondary"
                    className="rounded-sm px-1.5 py-0 text-xs font-normal"
                  >
                    {option?.label ?? val}
                    <button
                      type="button"
                      className="ml-1 rounded-sm outline-none ring-offset-background hover:text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onClick={(e) => handleRemove(val, e)}
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                );
              })}
              {overflowCount > 0 && (
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1.5 py-0 text-xs font-normal"
                >
                  +{overflowCount} more
                </Badge>
              )}
            </span>
          ) : (
            placeholder
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        data-slot="multi-select-content"
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selected.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => handleToggle(option.value)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <Check className="size-3" />
                    </div>
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { MultiSelect };
