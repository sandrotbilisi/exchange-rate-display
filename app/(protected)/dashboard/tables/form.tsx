"use client";

import {
  Form,
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ImageSelector from "@/components/ui/ImageSelector";
import { addTable } from "@/lib/api/tables/data";
import { toast } from "sonner";
import { RateTable } from "@/lib/db/types";

export default function TableForm({
  setOpen,
  table,
}: {
  setOpen: (open: boolean) => void;
  table: RateTable | null;
}) {
  const currencySchema = z.object({
    code: z.string().min(1, { message: "Required" }),
    label: z.string().min(1, { message: "Required" }),
    buyRate: z.string().min(1, { message: "Required" }),
    sellRate: z.string().min(1, { message: "Required" }),
    notableRate: z.string().min(1, { message: "Required" }),
    image: z.string().nullable(),
  });

  const formSchema = z.object({
    name: z.string().min(1, { message: "Enter table name" }),
    currencies: z.array(currencySchema).min(1),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: table?.name ?? "",
      currencies:
        table?.currencies.map((currency) => ({
          code: currency.code,
          label: currency.label,
          buyRate: currency.buyRate.toString(),
          sellRate: currency.sellRate.toString(),
          notableRate: currency.notableRate.toString(),
          image: currency.image ?? null,
        })) ?? [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "currencies",
  });

  const onSubmit = (data: FormValues) => {
    try {
      addTable(data as unknown as RateTable);
      toast.success("Table created successfully");
      form.reset();
      setOpen(false);
    } catch (error) {
      toast.error("Failed to create table");
    }
  };

  type FormValues = z.infer<typeof formSchema>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
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

        <div className="rounded-md border overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Photo</TableHead>
                <TableHead>Country Name</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Buy Rate</TableHead>
                <TableHead>Sell Rate</TableHead>
                <TableHead>Notable Rate</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field, index) => {
                // read this row’s current image:
                const currentImage = form.watch(`currencies.${index}.image`);

                return (
                  <TableRow key={field.id}>
                    <TableCell>
                      <FormControl>
                        <ImageSelector
                          selected={currentImage}
                          onChange={(item) => {
                            form.setValue(
                              `currencies.${index}.code`,
                              item.currency
                            );
                            form.setValue(
                              `currencies.${index}.label`,
                              item.country
                            );
                            // **set only this row’s image field**:
                            form.setValue(
                              `currencies.${index}.image`,
                              item.src
                            );
                          }}
                        />
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`currencies.${index}.label`}
                        render={({ field }) => (
                          <FormControl>
                            <Input placeholder="Country name" {...field} />
                          </FormControl>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`currencies.${index}.code`}
                        render={({ field }) => (
                          <FormControl>
                            <Input placeholder="Currency code" {...field} />
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
                );
              })}
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
              image: null,
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
  );
}
