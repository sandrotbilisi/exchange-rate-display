"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RateTable } from "@/lib/db/types";

// import {  } from ''

const data: RateTable[] = [
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

export const columns: ColumnDef<RateTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-right">Created At</div>,
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      // console.log("date : ", date.toLocaleDateString());
      return <div className="text-right font-medium">{date}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const table = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(table.id)}
            >
              Copy Table ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Table</DropdownMenuItem>
            <DropdownMenuItem className="bg-red-500 text-white data-[highlighted]:bg-red-700 data-[highlighted]:text-white">
              Delete Table
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function TableComponent() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter tables..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
