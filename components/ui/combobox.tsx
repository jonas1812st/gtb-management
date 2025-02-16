"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type ClassNamesEnum = "button" | "popover";
type PlaceholderEnum = "button" | "command" | "empty";

export function Combobox(props: {
  placeholder: { [k in PlaceholderEnum]: string };
  className?: { [k in ClassNamesEnum]?: string };
  values: { value: string; label: string }[];
  value: string;
  setValue: (value: string) => void;
  id?: string;
}) {
  const { placeholder, className, values, value, setValue } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button id={props.id} variant="outline" role="combobox" aria-expanded={open} className={cn("justify-between", className?.button)}>
          {value ? values.find((valueOption) => valueOption.value === value)?.label : placeholder?.button}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0 popover-content-width-full", className?.popover)}>
        <Command>
          <CommandInput placeholder={placeholder?.command} />
          <CommandList>
            <CommandEmpty>{placeholder?.empty}</CommandEmpty>
            <CommandGroup>
              {values.map((valueOption) => (
                <CommandItem
                  key={valueOption.value + ""}
                  value={valueOption.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === valueOption.value ? "opacity-100" : "opacity-0")} />
                  {valueOption.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
