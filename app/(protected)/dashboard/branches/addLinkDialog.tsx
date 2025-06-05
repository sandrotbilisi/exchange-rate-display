"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { RateTable } from "@/lib/db/types";

const mockTables: RateTable[] = [
  {
    id: "m5gr84i9",
    name: "Table 1",
    currencies: [
      {
        code: "USD",
        label: "United States Dollar",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "EUR",
        label: "Euro",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "GBP",
        label: "British Pound",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
    ],
    createdAt: "2025-01-01",
  },
  {
    id: "3u1reuv4",
    name: "Table 2",
    currencies: [
      {
        code: "USD",
        label: "United States Dollar",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "EUR",
        label: "Euro",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "GBP",
        label: "British Pound",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
    ],
    createdAt: "2025-01-01",
  },
  {
    id: "derv1ws0",
    name: "Table 3",
    currencies: [
      {
        code: "USD",
        label: "United States Dollar",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "EUR",
        label: "Euro",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "GBP",
        label: "British Pound",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
    ],
    createdAt: "2025-01-01",
  },
  {
    id: "5kma53ae",
    name: "Table 4",
    currencies: [
      {
        code: "USD",
        label: "United States Dollar",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "EUR",
        label: "Euro",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "GBP",
        label: "British Pound",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
    ],
    createdAt: "2025-01-01",
  },
  {
    id: "bhqecj4p",
    name: "Table 5",
    currencies: [
      {
        code: "USD",
        label: "United States Dollar",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "EUR",
        label: "Euro",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
      {
        code: "GBP",
        label: "British Pound",
        buyRate: 1,
        sellRate: 1,
        notableRate: 1,
        image: null,
      },
    ],
    createdAt: "2025-01-01",
  },
];

const formSchema = z.object({
  name: z.string().min(1, { message: "Enter a valid Name." }),
  address: z.string(),
  tableId: z.string().min(1, { message: "Select a table." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddLinkDialog() {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      tableId: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("✅ Submit link:", data);
    // TODO: call your backend API
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Branch</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Branch</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="tableId"
              render={({ field }) => {
                const selectedTable = mockTables.find(
                  (t) => t.id === field.value
                );

                return (
                  <FormItem>
                    <FormLabel>Table</FormLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className="w-full justify-between"
                          >
                            {selectedTable?.name || "Select table"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search table..." />
                          <CommandEmpty>No table found.</CommandEmpty>
                          <CommandGroup>
                            {mockTables.map((table) => (
                              <CommandItem
                                key={table.id}
                                value={table.id}
                                onSelect={() => {
                                  form.setValue("tableId", table.id);
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    table.id === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {table.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
