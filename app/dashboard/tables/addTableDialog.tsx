"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// 🔐 Schema aligned with RateTable currencies
const currencySchema = z.object({
  code: z.string().min(1, { message: "Required" }),
  label: z.string().min(1, { message: "Required" }),
  buyRate: z.string().min(1, { message: "Required" }),
  sellRate: z.string().min(1, { message: "Required" }),
  notableRate: z.string().min(1, { message: "Required" }),
});

const formSchema = z.object({
  name: z.string().min(1, { message: "Enter table name" }),
  currencies: z.array(currencySchema).min(1),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddTableDialog() {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      currencies: [
        {
          code: "",
          label: "",
          buyRate: "",
          sellRate: "",
          notableRate: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "currencies",
  });

  const onSubmit = (data: FormValues) => {
    console.log("✅ Submit table with currencies:", data);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Table</Button>
      </DialogTrigger>

      <DialogContent className="!max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create New Table</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-4"
          >
            {/* Table Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Table Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the table name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Currencies in Table */}
            <div className="rounded-md border overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Photo</TableHead>
                    <TableHead>Currency</TableHead>
                    <TableHead>Buy Rate</TableHead>
                    <TableHead>Sell Rate</TableHead>
                    <TableHead>Notable Rate</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((field, index) => (
                    <TableRow key={field.id}>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`currencies.${index}.code`}
                          render={({ field }) => (
                            <FormControl>
                              <Input placeholder="USD" {...field} />
                            </FormControl>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`currencies.${index}.label`}
                          render={({ field }) => (
                            <FormControl>
                              <Input placeholder="US Dollar" {...field} />
                            </FormControl>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`currencies.${index}.buyRate`}
                          render={({ field }) => (
                            <FormControl>
                              <Input placeholder="1.25" {...field} />
                            </FormControl>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`currencies.${index}.sellRate`}
                          render={({ field }) => (
                            <FormControl>
                              <Input placeholder="1.35" {...field} />
                            </FormControl>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`currencies.${index}.notableRate`}
                          render={({ field }) => (
                            <FormControl>
                              <Input placeholder="1.30" {...field} />
                            </FormControl>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                append({
                  code: "",
                  label: "",
                  buyRate: "",
                  sellRate: "",
                  notableRate: "",
                })
              }
            >
              Add Currency
            </Button>

            <DialogFooter>
              <Button type="submit">Create Table</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
